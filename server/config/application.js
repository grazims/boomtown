const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const fallback = require("express-history-api-fallback");
const path = require("path");

module.exports = app => {
  const PORT = process.env.PORT || 8080;
  app.set("PG_HOST", process.env.PG_HOST || "localhost");
  app.set("PORT", process.env.PO || "5432");
  app.set("PG_USER", process.env.PG_HOST || "grazielamiranda");
  app.set("PG_PASSWORD", process.env.PG_HOST || "");
  app.set("PG_DB", process.env.PG_HOST || "boomtown");
  app.set("JWT_SECRET", "lion");
  app.set("JWT_COOKIE_NAME", "boomtown_cookie");
  app.use(cookieParser());

  if (process.env.NODE_ENV === "production") {
    const root = path.resolve(__dirname, "../public");

    app.use(express.static(root));
    app.use(fallback("index.html", { root }));
  }

  if (process.env.NODE_ENV === "development") {
    const corsConfig = {
      origin: "http://localhost:3002",
      credentials: true
    };
    app.set("CORS_CONFIG", corsConfig);
    app.use(cors(corsConfig));
  }
  return PORT;
};
