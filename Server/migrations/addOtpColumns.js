const dbconnection = require("../Database/databaseconfig");

async function addOtpColumns() {
  try {
    console.log("🔄 Adding OTP columns to users table...");

    await dbconnection.query(`
      ALTER TABLE users 
      ADD COLUMN IF NOT EXISTS reset_otp VARCHAR(255),
      ADD COLUMN IF NOT EXISTS otp_expiration TIMESTAMP;
    `);

    console.log("✅ OTP columns added successfully!");

    // Verify columns were added
    const result = await dbconnection.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'users' 
      AND column_name IN ('reset_otp', 'otp_expiration');
    `);

    console.log("✅ Verified columns:", result.rows);

    process.exit(0);
  } catch (error) {
    console.error("❌ Full Error:", error);
    console.error("❌ Error Message:", error.message);
    console.error("❌ Error Stack:", error.stack);
    process.exit(1);
  }
}

addOtpColumns();
