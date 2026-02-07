import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4173;

// Serve static files from dist
app.use(express.static(join(__dirname, 'dist'), {
  maxAge: '1d',
  etag: true,
}));

// SPA fallback — serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`XeriaCo V9 serving on port ${PORT}`);
});
