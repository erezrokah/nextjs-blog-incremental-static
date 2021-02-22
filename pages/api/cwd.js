import path from "path";
export default (req, res) => {
  const cwd = process.cwd();
  const dirname = __dirname;
  res.status(200).json({ cwd, dirname });
};
