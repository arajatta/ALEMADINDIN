# ALEMADINDIN

App open source que resume y edita películas o series automáticamente con IA (voz, video y subtítulos).

## Estructura inicial
- `frontend/` → interfaz web demo (index.html, style.css, app.js)
- `backend/`  → placeholder para lógica del servidor
- `docs/`     → documentación del proyecto

## Cómo probar local (demo)
1. Descarga este repositorio (o usa la vista web para abrir `frontend/index.html` en el navegador).
2. Abre `frontend/index.html` en tu navegador para ver la demo local.
3. El botón "Generar resumen" actualmente simula el proceso. Luego conectaremos con un backend real.

## Siguiente pasos sugeridos
- Crear backend con Express y endpoints: `/api/uploads`, `/api/jobs`
- Implementar worker para transcripción (Whisper) y montaje (FFmpeg)
- Integrar TTS (ElevenLabs, Google TTS)
