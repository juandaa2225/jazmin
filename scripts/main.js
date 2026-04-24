const profile = {
  name: 'Jazmín Arango Moreno',
  headline:
    'Psicóloga clínica | Bienestar emocional, acompañamiento terapéutico y crecimiento personal.',
  about:
    'Espacio de texto provisional para una presentación cercana y profesional. Aquí podrás compartir su trayectoria, valores y la forma en que acompaña a sus pacientes.',
  contactText:
    'Puedes dejar aquí teléfono, email, ciudad y horarios. También un texto breve de invitación a agendar.',
  contactLink: 'Enviar correo',
};

Object.entries(profile).forEach(([field, value]) => {
  document.querySelectorAll(`[data-field="${field}"]`).forEach((node) => {
    if (field === 'contactLink') {
      node.textContent = value;
      return;
    }

    node.textContent = value;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
