const upload = document.getElementById('videoFile');
const startBtn = document.getElementById('startBtn');
const status = document.getElementById('status');
const preview = document.getElementById('preview');

startBtn.addEventListener('click', async () => {
  const file = upload.files[0];
  const duration = document.getElementById('duration').value;
  const tone = document.getElementById('tone').value;

  if (!file) {
    status.textContent = 'Selecciona un archivo mp4 primero.';
    return;
  }

  status.textContent = 'Preparando subida... (demo en local)';
  // Demo: mostrar previsualización localmente
  const url = URL.createObjectURL(file);
  preview.src = url;
  status.textContent = `Archivo listo. Simulando job: resumen ${duration}s con tono ${tone}.`;
  // En el futuro: subir a backend / crear job / mostrar progreso.
});
