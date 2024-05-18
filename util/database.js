import * as SQLite from "expo-sqlite";

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
  await db.execAsync(
    `
    INSERT INTO places (title, imageUri, address, lat, lng)
    VALUES (?, ?, ?, ?, ?);
  `,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ]
  );
};
