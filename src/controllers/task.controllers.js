import { pool } from '../db.js';

export const getAllTask = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM task');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM task WHERE id = ?', [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      deadline,
      comments,
      responsible,
      create_by,
      tag,
    } = req.body;
    const [rows] = await pool.query(
      'INSERT INTO task (title, description, status, deadline, comments, responsible, create_by, tag) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        title,
        description,
        status,
        deadline,
        comments,
        responsible,
        create_by,
        tag,
      ]
    );
    res.status(201).json({
      id: rows.insertId,
      title,
      description,
      status,
      deadline,
      comments,
      responsible,
      create_by,
      tag,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      status,
      deadline,
      comments,
      responsible,
      create_by,
      tag,
    } = req.body;

    const [result] = await pool.query(
      'UPDATE task SET title = IFNULL(?, title), description = IFNULL(?, description), status = IFNULL(?, status), deadline = IFNULL(?, deadline), comments = IFNULL(?, comments), responsible = IFNULL(?, responsible), create_by = IFNULL(?, create_by), tag = IFNULL(?, tag) WHERE id = ?',
      [
        title,
        description,
        status,
        deadline,
        comments,
        responsible,
        create_by,
        tag,
        id,
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Task not found' });

    const [rows] = await pool.query('SELECT * FROM task WHERE id = ?', [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('DELETE FROM task WHERE id = ?', [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};
