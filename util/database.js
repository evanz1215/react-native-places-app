import * as SQLite from "expo-sqlite";
import { Place } from "../models/places";

// Singleton pattern to manage the database connection
let db;

const getDatabase = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync("places.db");
  }
  return db;
};

export const initDatabase = async () => {
  const db = await getDatabase();
  await db.withTransactionAsync(async () => {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      );
    `);
  });

  return db;
};

export const insertPlace = async (place) => {
  const db = await getDatabase();
  await db.runAsync(
    `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ]
  );
};

export const fetchPlaces = async () => {
  const db = await getDatabase();
  const result = await db.getAllAsync("SELECT * FROM places");
  const places = [];

  for (const dp of result) {
    places.push(
      new Place(
        dp.title,
        dp.imageUri,
        {
          address: dp.address,
          lat: dp.lat,
          lng: dp.lng,
        },
        dp.id
      )
    );
  }

  return places;
};
