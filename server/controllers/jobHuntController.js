import db from "../db.js";

export const getAllJobHunts = () => {};
export const getJobHunt = () => {};
export const createJobHunt = async (req, res) => {
  const { title, link, description, status } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO jobhunts (title, link, description, status) VALUES ($1, $2, $3, $4) returning *",
      [title, link, description, status]
    );

    res.status(201).json({ message: "Success", data: result.rows[0] });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};
export const updateJobHunt = () => {};
export const deleteJobHunt = () => {};
