const fs = require('fs/promises');
const tasksFilePath = './tasks.json';

exports.getAllTasks = async (req, res) => {
  try {
    const data = await fs.readFile(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error reading tasks from file.' });
  }
};

exports.getTaskById = async (req, res) => {
  const taskId = parseInt(req.params.id);
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  try {
    const data = await fs.readFile(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error reading tasks from file.' });
  }
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const data = await fs.readFile(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);
    const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error writing tasks to file.' });
  }
};

exports.updateTaskById = async (req, res) => {
  const taskId = parseInt(req.params.id);
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const data = await fs.readFile(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks[index] = { id: taskId, title, description };
    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.json(tasks[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error writing tasks to file.' });
  }
};

exports.deleteTaskById = async (req, res) => {
  const taskId = parseInt(req.params.id);
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  try {
    const data = await fs.readFile(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(index, 1);
    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error writing tasks to file.' });
  }
};
