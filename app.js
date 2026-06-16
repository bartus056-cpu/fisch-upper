const STORAGE_KEY = "fishing-weather-poland-v2";
const FISCHER_AI_ENDPOINT = "https://fischer-ai.bartus056.workers.dev";
const FISCHER_AI_TIMEOUT_MS = 12000;

const imgwStations = [
  { name: "Białystok", lat: 53.1325, lon: 23.1688 },
  { name: "Bielsko-Biała", lat: 49.8224, lon: 19.0449 },
  { name: "Chojnice", lat: 53.6955, lon: 17.557 },
  { name: "Częstochowa", lat: 50.8118, lon: 19.1203 },
  { name: "Elbląg", lat: 54.1522, lon: 19.4088 },
  { name: "Gdańsk", lat: 54.352, lon: 18.6466 },
  { name: "Gorzów", lat: 52.7368, lon: 15.2288 },
  { name: "Hel", lat: 54.6081, lon: 18.8013 },
  { name: "Jelenia Góra", lat: 50.9044, lon: 15.7194 },
  { name: "Kalisz", lat: 51.7611, lon: 18.091 },
  { name: "Katowice", lat: 50.2649, lon: 19.0238 },
  { name: "Kętrzyn", lat: 54.0768, lon: 21.3753 },
  { name: "Kielce", lat: 50.8661, lon: 20.6286 },
  { name: "Kłodzko", lat: 50.4349, lon: 16.6615 },
  { name: "Kołobrzeg", lat: 54.1769, lon: 15.5764 },
  { name: "Koszalin", lat: 54.1944, lon: 16.1722 },
  { name: "Kozienice", lat: 51.5829, lon: 21.5668 },
  { name: "Kraków", lat: 50.0647, lon: 19.945 },
  { name: "Krosno", lat: 49.6887, lon: 21.7706 },
  { name: "Legnica", lat: 51.207, lon: 16.1553 },
  { name: "Lesko", lat: 49.47, lon: 22.33 },
  { name: "Leszno", lat: 51.8403, lon: 16.5749 },
  { name: "Lębork", lat: 54.5392, lon: 17.7501 },
  { name: "Lublin", lat: 51.2465, lon: 22.5684 },
  { name: "Łeba", lat: 54.7601, lon: 17.5569 },
  { name: "Łódź", lat: 51.7592, lon: 19.455 },
  { name: "Mikołajki", lat: 53.8029, lon: 21.5701 },
  { name: "Mława", lat: 53.1128, lon: 20.3841 },
  { name: "Nowy Sącz", lat: 49.6218, lon: 20.6971 },
  { name: "Olsztyn", lat: 53.7784, lon: 20.4801 },
  { name: "Opole", lat: 50.6751, lon: 17.9213 },
  { name: "Ostrołęka", lat: 53.0833, lon: 21.5667 },
  { name: "Piła", lat: 53.1515, lon: 16.7382 },
  { name: "Płock", lat: 52.5468, lon: 19.7064 },
  { name: "Poznań", lat: 52.4064, lon: 16.9252 },
  { name: "Przemyśl", lat: 49.7839, lon: 22.7678 },
  { name: "Racibórz", lat: 50.0915, lon: 18.2193 },
  { name: "Resko", lat: 53.7721, lon: 15.4066 },
  { name: "Rzeszów", lat: 50.0412, lon: 21.9991 },
  { name: "Sandomierz", lat: 50.6827, lon: 21.749 },
  { name: "Siedlce", lat: 52.1677, lon: 22.2901 },
  { name: "Słubice", lat: 52.3509, lon: 14.5606 },
  { name: "Sulejów", lat: 51.3544, lon: 19.8855 },
  { name: "Suwałki", lat: 54.1115, lon: 22.9308 },
  { name: "Szczecin", lat: 53.4285, lon: 14.5528 },
  { name: "Szczecinek", lat: 53.7079, lon: 16.6994 },
  { name: "Świnoujście", lat: 53.9105, lon: 14.2471 },
  { name: "Tarnów", lat: 50.0121, lon: 20.9858 },
  { name: "Terespol", lat: 52.0756, lon: 23.6161 },
  { name: "Toruń", lat: 53.0138, lon: 18.5984 },
  { name: "Ustka", lat: 54.5805, lon: 16.8619 },
  { name: "Warszawa", lat: 52.2297, lon: 21.0122 },
  { name: "Wieluń", lat: 51.2209, lon: 18.5696 },
  { name: "Włodawa", lat: 51.55, lon: 23.55 },
  { name: "Wrocław", lat: 51.1079, lon: 17.0385 },
  { name: "Zakopane", lat: 49.2992, lon: 19.9496 },
  { name: "Zamość", lat: 50.7231, lon: 23.251 },
  { name: "Zielona Góra", lat: 51.9356, lon: 15.5062 },
];

const presets = [
  {
    name: "Malina - Opole",
    lat: 50.6319,
    lon: 17.9886,
    station: "Opole",
    type: "Jezioro",
    species: "karp, amur, lin, szczupak, okoń",
  },
  {
    name: "Jezioro Turawskie",
    lat: 50.7266,
    lon: 18.1195,
    station: "Opole",
    type: "Jezioro",
    species: "sandacz, szczupak, okoń, leszcz",
  },
  {
    name: "Mazury - Mikołajki",
    lat: 53.8029,
    lon: 21.5701,
    station: "Mikołajki",
    type: "Jezioro",
    species: "szczupak, okoń, sandacz, węgorz",
  },
  {
    name: "Zalew Zegrzyński",
    lat: 52.4722,
    lon: 21.0483,
    station: "Warszawa",
    type: "Zalew",
    species: "sandacz, sum, leszcz, okoń",
  },
  {
    name: "Wisła - Warszawa",
    lat: 52.2477,
    lon: 21.0122,
    station: "Warszawa",
    type: "Rzeka",
    species: "boleń, sandacz, sum, brzana",
  },
  {
    name: "Odra - Wrocław",
    lat: 51.1079,
    lon: 17.0385,
    station: "Wrocław",
    type: "Rzeka",
    species: "kleń, sandacz, sum, leszcz",
  },
  {
    name: "Jezioro Solińskie",
    lat: 49.3953,
    lon: 22.4515,
    station: "Lesko",
    type: "Jezioro",
    species: "sandacz, szczupak, okoń, pstrąg",
  },
  {
    name: "Zatoka Gdańska - Hel",
    lat: 54.6081,
    lon: 18.8013,
    station: "Hel",
    type: "Morze",
    species: "belona, dorsz, fladra, okoń morski",
  },
  {
    name: "Jezioro Dąbie - Szczecin",
    lat: 53.4246,
    lon: 14.6337,
    station: "Szczecin",
    type: "Jezioro",
    species: "sandacz, szczupak, okoń",
  },
];

const weatherCodeText = {
  0: "Bezchmurnie",
  1: "Przeważnie słonecznie",
  2: "Częściowe zachmurzenie",
  3: "Pochmurno",
  45: "Mgła",
  48: "Mgła osadzająca szadź",
  51: "Słaba mżawka",
  53: "Mzawka",
  55: "Silna mżawka",
  56: "Marznąca mżawka",
  57: "Silna marznąca mżawka",
  61: "Słaby deszcz",
  63: "Deszcz",
  65: "Silny deszcz",
  66: "Marznący deszcz",
  67: "Silny marznący deszcz",
  71: "Słaby śnieg",
  73: "Śnieg",
  75: "Silny śnieg",
  77: "Ziarnisty śnieg",
  80: "Przelotny deszcz",
  81: "Przelotny deszcz",
  82: "Silna ulewa",
  85: "Przelotny śnieg",
  86: "Silny przelotny śnieg",
  95: "Burza",
  96: "Burza z gradem",
  99: "Silna burza z gradem",
};

const defaultBaits = [
  {
    id: "default-wafters-scopex",
    name: "Wafters scopex / wanilia",
    category: "wafters",
    flavor: "słodki",
    color: "żółty / biały",
    use: "method feeder, karp, leszcz, spokojna albo lekko falująca woda",
  },
  {
    id: "default-wafters-czosnek",
    name: "Wafters czosnek / przyprawa",
    category: "wafters",
    flavor: "ostry",
    color: "pomarańczowy",
    use: "chłodniejsza woda, słabsze brania, punktowe nęcenie",
  },
  {
    id: "default-pellet-halibut",
    name: "Pellet halibut / ryba",
    category: "pellet",
    flavor: "rybny",
    color: "ciemny",
    use: "karp, amur, leszcz, cieplejsza woda i stabilne ciśnienie",
  },
  {
    id: "default-corn-honey",
    name: "Kukurydza miód",
    category: "inne",
    flavor: "miód",
    color: "żółty",
    use: "lin, karaś, karp, płytkie blaty i okolice roślin",
  },
  {
    id: "default-red-worms",
    name: "Czerwone robaki",
    category: "robaki",
    flavor: "naturalny",
    color: "naturalny",
    use: "po deszczu, przy dopływach, na białą rybę i okonia",
  },
  {
    id: "default-natural-gum",
    name: "Guma naturalna 7 cm",
    category: "guma",
    flavor: "brak",
    color: "naturalny",
    use: "okoń, sandacz, czystsza woda, wolne prowadzenie przy dnie",
  },
  {
    id: "default-bright-gum",
    name: "Guma jaskrawa 8 cm",
    category: "guma",
    flavor: "brak",
    color: "chartreuse",
    use: "mętna woda, opad, słabsza widoczność, szybkie sprawdzanie miejsc",
  },
  {
    id: "default-sweet-groundbait",
    name: "Zanęta feeder słodka",
    category: "zanęta",
    flavor: "słodki",
    color: "jasny",
    use: "ciepłe dni, leszcz, karp, regularne donęcanie małymi porcjami",
  },
  {
    id: "default-fish-groundbait",
    name: "Zanęta rybna / pelletowa",
    category: "zanęta",
    flavor: "rybny",
    color: "ciemny",
    use: "zimniejsza woda, większa ryba, ostrożne nęcenie",
  },
];

const state = {
  selected: { ...presets[0] },
  spots: [],
  photos: [],
  trips: [],
  baits: [],
  bottomPoints: [],
  weather: null,
  water: null,
  map: null,
  currentMarker: null,
  spotLayer: null,
  assistantMessages: [],
};

const dom = {
  presetSelect: document.querySelector("#presetSelect"),
  stationList: document.querySelector("#stationList"),
  latInput: document.querySelector("#latInput"),
  lonInput: document.querySelector("#lonInput"),
  stationInput: document.querySelector("#stationInput"),
  locateButton: document.querySelector("#locateButton"),
  loadWeatherButton: document.querySelector("#loadWeatherButton"),
  refreshButton: document.querySelector("#refreshButton"),
  focusMapButton: document.querySelector("#focusMapButton"),
  planSpotSelect: document.querySelector("#planSpotSelect"),
  planDateInput: document.querySelector("#planDateInput"),
  planSpeciesInput: document.querySelector("#planSpeciesInput"),
  todayPlanButton: document.querySelector("#todayPlanButton"),
  buildPlanButton: document.querySelector("#buildPlanButton"),
  planOutput: document.querySelector("#planOutput"),
  scoreRing: document.querySelector("#scoreRing"),
  scoreValue: document.querySelector("#scoreValue"),
  statusLine: document.querySelector("#statusLine"),
  adviceBox: document.querySelector("#adviceBox"),
  metricGrid: document.querySelector("#metricGrid"),
  detailGrid: document.querySelector("#detailGrid"),
  assistantSummary: document.querySelector("#assistantSummary"),
  assistantChat: document.querySelector("#assistantChat"),
  assistantForm: document.querySelector("#assistantForm"),
  assistantQuestion: document.querySelector("#assistantQuestion"),
  assistantAnswer: document.querySelector("#assistantAnswer"),
  assistantClearButton: document.querySelector("#assistantClearButton"),
  hourlyList: document.querySelector("#hourlyList"),
  marineList: document.querySelector("#marineList"),
  map: document.querySelector("#map"),
  mapFallback: document.querySelector("#mapFallback"),
  spotForm: document.querySelector("#spotForm"),
  spotNameInput: document.querySelector("#spotNameInput"),
  spotTypeInput: document.querySelector("#spotTypeInput"),
  spotSpeciesInput: document.querySelector("#spotSpeciesInput"),
  spotNotesInput: document.querySelector("#spotNotesInput"),
  spotList: document.querySelector("#spotList"),
  depthForm: document.querySelector("#depthForm"),
  depthValueInput: document.querySelector("#depthValueInput"),
  bottomTypeInput: document.querySelector("#bottomTypeInput"),
  structureInput: document.querySelector("#structureInput"),
  depthDistanceInput: document.querySelector("#depthDistanceInput"),
  depthNoteInput: document.querySelector("#depthNoteInput"),
  bottomSummary: document.querySelector("#bottomSummary"),
  bottomProfile: document.querySelector("#bottomProfile"),
  bottomPointList: document.querySelector("#bottomPointList"),
  baitForm: document.querySelector("#baitForm"),
  baitNameInput: document.querySelector("#baitNameInput"),
  baitCategoryInput: document.querySelector("#baitCategoryInput"),
  baitFlavorInput: document.querySelector("#baitFlavorInput"),
  baitColorInput: document.querySelector("#baitColorInput"),
  baitUseInput: document.querySelector("#baitUseInput"),
  baitList: document.querySelector("#baitList"),
  photoForm: document.querySelector("#photoForm"),
  fileDrop: document.querySelector("#fileDrop"),
  photoInput: document.querySelector("#photoInput"),
  photoDropTitle: document.querySelector("#photoDropTitle"),
  photoDropMeta: document.querySelector("#photoDropMeta"),
  photoSpotSelect: document.querySelector("#photoSpotSelect"),
  tripTitleInput: document.querySelector("#tripTitleInput"),
  tripResultInput: document.querySelector("#tripResultInput"),
  photoSpeciesInput: document.querySelector("#photoSpeciesInput"),
  photoDateInput: document.querySelector("#photoDateInput"),
  tripDepthInput: document.querySelector("#tripDepthInput"),
  tripBaitSelect: document.querySelector("#tripBaitSelect"),
  tripLureSelect: document.querySelector("#tripLureSelect"),
  photoNoteInput: document.querySelector("#photoNoteInput"),
  photoStatus: document.querySelector("#photoStatus"),
  photoStatusText: document.querySelector("#photoStatusText"),
  albumGrid: document.querySelector("#albumGrid"),
  clearAlbumButton: document.querySelector("#clearAlbumButton"),
  menuButton: document.querySelector("#menuButton"),
  appDrawer: document.querySelector("#appDrawer"),
  drawerOverlay: document.querySelector("#drawerOverlay"),
  drawerCloseButton: document.querySelector("#drawerCloseButton"),
  exportDataButton: document.querySelector("#exportDataButton"),
  importDataButton: document.querySelector("#importDataButton"),
  importDataInput: document.querySelector("#importDataInput"),
};

function init() {
  loadStorage();
  setupPresets();
  setupStationList();
  setupMap();
  bindEvents();
  hydrateInputs();
  renderSpots();
  renderBaits();
  renderPlanOutput();
  renderBottomProfile();
  renderAlbum();
  renderWater(null);
  renderAssistantChat();
  loadWeather();
  if (window.lucide) window.lucide.createIcons();
  hideBootWarning();
}

function hideBootWarning() {
  const bootWarning = document.querySelector("#bootWarning");
  if (bootWarning) bootWarning.hidden = true;
}

function showBootError(error) {
  const bootWarning = document.querySelector("#bootWarning");
  if (!bootWarning) return;
  bootWarning.hidden = false;
  bootWarning.classList.add("is-error");
  const message = error?.message ? ` Błąd: ${error.message}` : "";
  bootWarning.innerHTML = `<strong>Aplikacja nie wystartowała.</strong><span>Najczęściej oznacza to, że na GitHubie jest stary albo niepodmieniony plik app.js.${escapeHtml(message)}</span>`;
}

function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    state.spots = Array.isArray(saved.spots) ? saved.spots : [];
    state.photos = Array.isArray(saved.photos) ? saved.photos : [];
    state.trips = Array.isArray(saved.trips) ? saved.trips : [];
    state.baits = Array.isArray(saved.baits) ? saved.baits : [];
    state.bottomPoints = Array.isArray(saved.bottomPoints) ? saved.bottomPoints : [];
    if (Number.isFinite(Number(saved.selected?.lat)) && Number.isFinite(Number(saved.selected?.lon))) {
      state.selected = saved.selected;
    }
  } catch (error) {
    console.warn("Nie udało się wczytać zapisu", error);
  }
}

function saveStorage() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      selected: state.selected,
      spots: state.spots,
      photos: state.photos,
      trips: state.trips,
      baits: state.baits,
      bottomPoints: state.bottomPoints,
    })
  );
}

function setupPresets() {
  presets.forEach((preset, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = preset.name;
    dom.presetSelect.append(option);
  });
}

function setupStationList() {
  dom.stationList.innerHTML = imgwStations
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "pl"))
    .map((station) => `<option value="${escapeHtml(station.name)}"></option>`)
    .join("");
}

function setupMap() {
  if (!window.L) {
    dom.mapFallback.hidden = false;
    return;
  }

  state.map = L.map(dom.map, {
    zoomControl: true,
    scrollWheelZoom: true,
  }).setView([state.selected.lat, state.selected.lon], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(state.map);

  state.spotLayer = L.layerGroup().addTo(state.map);
  state.map.on("click", (event) => {
    selectLocation({
      lat: roundCoord(event.latlng.lat),
      lon: roundCoord(event.latlng.lng),
      station: findNearestImgwStation(event.latlng.lat, event.latlng.lng)?.name || "",
      name: "Wybrane miejsce",
    });
    dom.spotNameInput.focus();
  });
  updateCurrentMarker();
}

function bindEvents() {
  dom.presetSelect.addEventListener("change", () => {
    const preset = presets[Number(dom.presetSelect.value)];
    if (!preset) return;
    selectLocation({ ...preset });
    dom.spotNameInput.value = preset.name;
    dom.spotTypeInput.value = preset.type || "Inne";
    dom.spotSpeciesInput.value = preset.species || "";
    if (state.map) state.map.setView([preset.lat, preset.lon], 11);
    loadWeather();
  });

  dom.loadWeatherButton.addEventListener("click", () => {
    selectLocation(readInputs());
    loadWeather();
  });

  dom.refreshButton.addEventListener("click", loadWeather);
  dom.focusMapButton.addEventListener("click", () => {
    if (!state.map) return;
    state.map.setView([state.selected.lat, state.selected.lon], Math.max(state.map.getZoom(), 11));
    updateCurrentMarker();
  });

  dom.locateButton.addEventListener("click", locateUser);
  dom.spotForm.addEventListener("submit", handleSpotSubmit);
  dom.depthForm?.addEventListener("submit", handleDepthSubmit);
  dom.baitForm?.addEventListener("submit", handleBaitSubmit);
  dom.todayPlanButton?.addEventListener("click", () => renderFishingPlan("today"));
  dom.buildPlanButton?.addEventListener("click", () => renderFishingPlan("planned"));
  dom.assistantForm?.addEventListener("submit", handleAssistantSubmit);
  dom.assistantClearButton?.addEventListener("click", clearAssistantChat);
  document.querySelectorAll("[data-assistant-prompt]").forEach((button) => {
    button.addEventListener("click", () => answerAssistant(button.dataset.assistantPrompt || ""));
  });
  dom.photoInput.addEventListener("change", handlePhotoSelection);
  dom.photoForm.addEventListener("submit", handlePhotoSubmit);
  dom.clearAlbumButton.addEventListener("click", clearAlbum);
  dom.menuButton?.addEventListener("click", openDrawer);
  dom.drawerCloseButton?.addEventListener("click", closeDrawer);
  dom.drawerOverlay?.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
  dom.exportDataButton.addEventListener("click", () => {
    exportData();
    closeDrawer();
  });
  dom.importDataButton.addEventListener("click", () => dom.importDataInput.click());
  dom.importDataInput.addEventListener("change", importData);
}

function openDrawer() {
  if (!dom.appDrawer || !dom.drawerOverlay || !dom.menuButton) return;
  dom.drawerOverlay.hidden = false;
  dom.appDrawer.removeAttribute("inert");
  dom.appDrawer.classList.add("is-open");
  dom.appDrawer.setAttribute("aria-hidden", "false");
  dom.menuButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  if (!dom.appDrawer || !dom.drawerOverlay || !dom.menuButton) return;
  dom.appDrawer.classList.remove("is-open");
  dom.appDrawer.setAttribute("aria-hidden", "true");
  dom.appDrawer.setAttribute("inert", "");
  dom.menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("drawer-open");
  window.setTimeout(() => {
    if (!dom.appDrawer.classList.contains("is-open")) dom.drawerOverlay.hidden = true;
  }, 190);
}

function hydrateInputs() {
  dom.latInput.value = state.selected.lat;
  dom.lonInput.value = state.selected.lon;
  dom.stationInput.value = state.selected.station || "";
  dom.photoDateInput.valueAsDate = new Date();
  if (dom.planDateInput) dom.planDateInput.valueAsDate = new Date();
}

function handlePhotoSelection() {
  const files = Array.from(dom.photoInput.files || []);
  if (!files.length) {
    resetPhotoPicker();
    setPhotoStatus("");
    return;
  }

  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  dom.fileDrop?.classList.add("has-files");
  if (dom.photoDropTitle) {
    dom.photoDropTitle.textContent = files.length === 1 ? files[0].name : `${photoCountLabel(files.length)} wybrane`;
  }
  if (dom.photoDropMeta) dom.photoDropMeta.textContent = `${formatFileSize(totalBytes)} gotowe do zapisu`;
  setPhotoStatus(`Wybrano ${photoCountLabel(files.length)}. Kliknij „Zapisz wyprawę”.`, "working");
}

function resetPhotoPicker() {
  dom.fileDrop?.classList.remove("has-files");
  if (dom.photoDropTitle) dom.photoDropTitle.textContent = "Dodaj zdjęcia z wyprawy";
  if (dom.photoDropMeta) dom.photoDropMeta.textContent = "JPG, PNG, WebP";
}

function setPhotoStatus(message, tone = "normal") {
  if (!dom.photoStatus || !dom.photoStatusText) return;
  if (!message) {
    dom.photoStatus.hidden = true;
    dom.photoStatusText.textContent = "";
    dom.photoStatus.className = "photo-status";
    return;
  }
  dom.photoStatus.hidden = false;
  dom.photoStatusText.textContent = message;
  dom.photoStatus.className = `photo-status is-${tone}`;
}

function readInputs() {
  return {
    ...state.selected,
    lat: Number(dom.latInput.value),
    lon: Number(dom.lonInput.value),
    station: dom.stationInput.value.trim(),
  };
}

function selectLocation(location) {
  const lat = Number(location.lat);
  const lon = Number(location.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    setStatus("Wpisz poprawne współrzędne.", "warn");
    return;
  }

  const nearest = findNearestImgwStation(lat, lon);
  state.selected = {
    ...state.selected,
    ...location,
    lat: roundCoord(lat),
    lon: roundCoord(lon),
    station: location.station || nearest?.name || "",
  };
  hydrateInputs();
  saveStorage();
  updateCurrentMarker();
  renderBottomProfile();
  renderPlanOutput();
}

async function locateUser() {
  if (!navigator.geolocation) {
    setStatus("Ta przeglądarka nie udostępnia lokalizacji.", "warn");
    return;
  }
  setStatus("Czekam na lokalizację z przeglądarki...");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      selectLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        name: "Moja lokalizacja",
      });
      if (state.map) state.map.setView([state.selected.lat, state.selected.lon], 11);
      loadWeather();
    },
    () => setStatus("Nie udało się pobrać lokalizacji.", "warn"),
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

async function loadWeather() {
  const location = readInputs();
  if (!Number.isFinite(location.lat) || !Number.isFinite(location.lon)) {
    setStatus("Wpisz poprawne współrzędne.", "warn");
    return;
  }

  selectLocation(location);
  setLoading(true);
  setStatus("Pobieram prognozę i dane IMGW...");

  try {
    const [forecastResult, synopResult, hydroResult] = await Promise.allSettled([
      fetchForecast(state.selected.lat, state.selected.lon),
      fetchImgwSynop(),
      fetchImgwHydro(),
    ]);

    if (forecastResult.status === "rejected") throw forecastResult.reason;

    const synopRows = synopResult.status === "fulfilled" ? synopResult.value : [];
    const hydroRows = hydroResult.status === "fulfilled" ? hydroResult.value : [];
    const synop = pickSynopStation(synopRows, state.selected);
    const hydro = pickNearestHydroStation(hydroRows, state.selected.lat, state.selected.lon);

    state.selected.station = synop?.stacja || state.selected.station;
    state.weather = buildWeatherState(forecastResult.value, synop);
    state.water = { synop, hydro };

    hydrateInputs();
    renderWeather();
    renderWater(state.water);
    renderPlanOutput();
    saveStorage();
    setStatus(`Dane odswiezone: ${new Date().toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" })}`);
  } catch (error) {
    console.error(error);
    state.weather = null;
    state.water = null;
    renderWeatherError(error);
    renderWater(null);
  } finally {
    setLoading(false);
  }
}

async function fetchForecast(lat, lon) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    timezone: "auto",
    forecast_days: "3",
    models: "best_match",
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation",
      "weather_code",
      "apparent_temperature",
      "cloud_cover",
      "wind_speed_10m",
      "wind_direction_10m",
      "wind_gusts_10m",
      "pressure_msl",
      "is_day",
    ].join(","),
    hourly: [
      "temperature_2m",
      "apparent_temperature",
      "dew_point_2m",
      "relative_humidity_2m",
      "precipitation_probability",
      "precipitation",
      "weather_code",
      "wind_speed_10m",
      "wind_direction_10m",
      "wind_gusts_10m",
      "pressure_msl",
      "cloud_cover",
      "visibility",
    ].join(","),
    daily: [
      "sunrise",
      "sunset",
      "daylight_duration",
      "sunshine_duration",
      "uv_index_max",
      "precipitation_probability_max",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
      "wind_direction_10m_dominant",
    ].join(","),
  });
  return fetchJson(url.toString(), "prognoza Open-Meteo");
}

async function fetchImgwSynop() {
  return fetchJson("https://danepubliczne.imgw.pl/api/data/synop", "obserwacje IMGW");
}

async function fetchImgwHydro() {
  return fetchJson("https://danepubliczne.imgw.pl/api/data/hydro", "dane hydrologiczne IMGW");
}

async function fetchJson(url, label) {
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) {
    throw new Error(`${label || "Serwis pogodowy"} zwrocil blad ${response.status}.`);
  }
  return response.json();
}

function buildWeatherState(forecast, synop) {
  const periods = openMeteoHourlyPeriods(forecast);
  const current = normalizeCurrentForecast(forecast.current, periods[0], synop);
  return {
    forecast,
    current,
    hourly: periods,
    daily: normalizeDailyForecast(forecast),
    synop,
  };
}

function normalizeCurrentForecast(current, firstPeriod, synop) {
  const source = current || {};
  return {
    startTime: source.time || firstPeriod?.startTime || new Date().toISOString(),
    temperature: firstNumber(source.temperature_2m, firstPeriod?.temperature, synopNumber(synop, "temperatura")),
    relativeHumidity: firstNumber(
      source.relative_humidity_2m,
      firstPeriod?.relativeHumidity,
      synopNumber(synop, "wilgotnosc_wzgledna")
    ),
    precipitationProbability: firstNumber(firstPeriod?.precipitationProbability),
    precipitation: firstNumber(source.precipitation, firstPeriod?.precipitation, synopNumber(synop, "suma_opadu")),
    weatherCode: firstNumber(source.weather_code, firstPeriod?.weatherCode),
    apparentTemperature: firstNumber(source.apparent_temperature, firstPeriod?.apparentTemperature),
    dewPoint: firstNumber(firstPeriod?.dewPoint),
    cloudCover: firstNumber(source.cloud_cover, firstPeriod?.cloudCover),
    windSpeed: firstNumber(source.wind_speed_10m, firstPeriod?.windSpeed, synopWindKph(synop)),
    windDirection: firstNumber(source.wind_direction_10m, firstPeriod?.windDirection, synopNumber(synop, "kierunek_wiatru")),
    windGust: firstNumber(source.wind_gusts_10m, firstPeriod?.windGust),
    pressure: firstNumber(source.pressure_msl, firstPeriod?.pressure, synopNumber(synop, "cisnienie")),
    visibility: firstNumber(firstPeriod?.visibility),
    isDay: firstNumber(source.is_day),
    shortForecast: weatherDescription(firstNumber(source.weather_code, firstPeriod?.weatherCode)),
  };
}

function normalizeDailyForecast(forecast) {
  const daily = forecast.daily || {};
  if (!Array.isArray(daily.time) || !daily.time.length) return null;
  const index = 0;
  return {
    date: daily.time[index],
    sunrise: daily.sunrise?.[index] || null,
    sunset: daily.sunset?.[index] || null,
    daylightDuration: numberOrNull(daily.daylight_duration?.[index]),
    sunshineDuration: numberOrNull(daily.sunshine_duration?.[index]),
    uvIndexMax: numberOrNull(daily.uv_index_max?.[index]),
    precipitationProbabilityMax: numberOrNull(daily.precipitation_probability_max?.[index]),
    windSpeedMax: numberOrNull(daily.wind_speed_10m_max?.[index]),
    windGustMax: numberOrNull(daily.wind_gusts_10m_max?.[index]),
    dominantWindDirection: numberOrNull(daily.wind_direction_10m_dominant?.[index]),
  };
}

function openMeteoHourlyPeriods(forecast) {
  const hourly = forecast.hourly || {};
  const times = hourly.time || [];
  const now = Date.now() - 60 * 60 * 1000;
  return times
    .map((time, index) => ({
      startTime: time,
      temperature: numberOrNull(hourly.temperature_2m?.[index]),
      apparentTemperature: numberOrNull(hourly.apparent_temperature?.[index]),
      dewPoint: numberOrNull(hourly.dew_point_2m?.[index]),
      relativeHumidity: numberOrNull(hourly.relative_humidity_2m?.[index]),
      precipitationProbability: numberOrNull(hourly.precipitation_probability?.[index]),
      precipitation: numberOrNull(hourly.precipitation?.[index]),
      weatherCode: numberOrNull(hourly.weather_code?.[index]),
      windSpeed: numberOrNull(hourly.wind_speed_10m?.[index]),
      windDirection: numberOrNull(hourly.wind_direction_10m?.[index]),
      windGust: numberOrNull(hourly.wind_gusts_10m?.[index]),
      pressure: numberOrNull(hourly.pressure_msl?.[index]),
      cloudCover: numberOrNull(hourly.cloud_cover?.[index]),
      visibility: numberOrNull(hourly.visibility?.[index]),
      shortForecast: weatherDescription(hourly.weather_code?.[index]),
    }))
    .filter((period) => new Date(period.startTime).getTime() >= now)
    .slice(0, 72);
}

function renderWeather() {
  if (!state.weather?.hourly?.length) {
    renderWeatherError(new Error("Brak godzinowej prognozy dla tego miejsca."));
    return;
  }

  const now = state.weather.current;
  const hydro = state.water?.hydro;
  const waterTemp = hydroWaterTemp(hydro);
  const score = scoreFishingHour({
    tempC: now.temperature,
    windKph: now.windSpeed,
    precipProbability: now.precipitationProbability,
    rainMm: now.precipitation,
    pressure: now.pressure,
    waterTemp,
    shortForecast: now.shortForecast,
  });

  setScore(score.value);
  dom.adviceBox.textContent = score.advice;
  renderMetrics([
    ["Temperatura", formatMaybe(now.temperature, "°C")],
    ["Wiatr", `${formatMaybe(now.windSpeed, "km/h")} ${directionText(now.windDirection)}`],
    ["Opad", `${formatMaybe(now.precipitation, "mm")} / ${formatMaybe(now.precipitationProbability, "%")}`],
    ["Wilgotność", formatMaybe(now.relativeHumidity, "%")],
    ["Ciśnienie", formatMaybe(now.pressure, "hPa")],
    ["Temp. wody", formatMaybe(waterTemp, "°C")],
  ]);
  renderFishingDetails(now, state.weather.daily, state.weather.hourly, waterTemp);
  renderAssistantSummary(score, now, state.weather.daily, state.weather.hourly, waterTemp);
  renderHourly(state.weather.hourly.slice(0, 12), waterTemp);
}

function renderWeatherError(error) {
  setScore(null);
  dom.adviceBox.textContent =
    "Nie udało się pobrać prognozy. Sprawdź internet albo spróbuj ponownie za chwilę.";
  dom.metricGrid.innerHTML = "";
  dom.detailGrid.innerHTML = "";
  if (dom.assistantSummary) {
    dom.assistantSummary.textContent = "Fischer potrzebuje aktualnej pogody. Pobierz dane jeszcze raz.";
  }
  if (dom.assistantAnswer) dom.assistantAnswer.textContent = "";
  dom.hourlyList.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}</div>`;
  setStatus(error.message, "warn");
}

function renderMetrics(metrics) {
  dom.metricGrid.innerHTML = metrics
    .map(
      ([label, value]) => `
        <div class="metric">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderFishingDetails(now, daily, hourly, waterTemp) {
  const moon = moonPhaseInfo(new Date(now.startTime || Date.now()));
  const pressureTrend = pressureTrendText(hourly);
  const cards = [
    [
      "Wiatr dokładnie",
      `${formatMaybe(now.windSpeed, "km/h")} ${directionTextLong(now.windDirection)}`,
      `Porywy: ${formatMaybe(now.windGust, "km/h")} · dziś max ${formatMaybe(daily?.windGustMax, "km/h")}`,
    ],
    [
      "Słońce",
      `${formatClock(daily?.sunrise)} - ${formatClock(daily?.sunset)}`,
      `Długość dnia: ${formatDuration(daily?.daylightDuration)} · słońca: ${formatDuration(daily?.sunshineDuration)}`,
    ],
    [
      "Księżyc",
      moon.name,
      `Oświetlenie ok. ${moon.illumination}% · wiek ${roundNumber(moon.age)} dnia`,
    ],
    [
      "Niebo i widoczność",
      `${formatMaybe(now.cloudCover, "%")} chmur`,
      `Widoczność: ${formatVisibility(now.visibility)} · UV max ${formatMaybe(daily?.uvIndexMax, "")}`,
    ],
    [
      "Odczuwalnie",
      formatMaybe(now.apparentTemperature, "°C"),
      `Punkt rosy: ${formatMaybe(now.dewPoint, "°C")} · wilgotność ${formatMaybe(now.relativeHumidity, "%")}`,
    ],
    [
      "Ciśnienie",
      formatMaybe(now.pressure, "hPa"),
      `${pressureTrend} · ryzyko opadu dziś max ${formatMaybe(daily?.precipitationProbabilityMax, "%")}`,
    ],
  ];

  if (Number.isFinite(waterTemp)) {
    cards.push(["Woda", formatMaybe(waterTemp, "°C"), "Temperatura z najbliższych danych IMGW, jeśli jest dostępna."]);
  }

  dom.detailGrid.innerHTML = cards
    .map(
      ([label, value, note]) => `
        <article class="detail-card">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
          <small>${escapeHtml(note)}</small>
        </article>
      `
    )
    .join("");
}

function renderAssistantSummary(score, now, daily, hourly, waterTemp) {
  if (!dom.assistantSummary) return;
  dom.assistantSummary.textContent = buildFishingAdvice("podsumowanie", score, now, daily, hourly, waterTemp);
}

function handleAssistantSubmit(event) {
  event.preventDefault();
  const question = dom.assistantQuestion?.value?.trim() || "";
  answerAssistant(question);
}

async function answerAssistant(question) {
  const userQuestion = String(question || "").trim() || "Podsumuj warunki i doradź, jak łowić.";
  if (!dom.assistantAnswer) return;
  addAssistantMessage("user", userQuestion);
  if (dom.assistantQuestion) dom.assistantQuestion.value = "";

  if (!state.weather?.current || !state.weather?.hourly?.length) {
    const message = "Najpierw pobierz pogodę dla łowiska. Wtedy odpowiem na bazie aktualnych danych.";
    addAssistantMessage("assistant", message, "warn");
    dom.assistantAnswer.textContent = message;
    return;
  }

  const now = state.weather.current;
  const waterTemp = hydroWaterTemp(state.water?.hydro);
  const score = scoreFishingHour({
    tempC: now.temperature,
    windKph: now.windSpeed,
    precipProbability: now.precipitationProbability,
    rainMm: now.precipitation,
    pressure: now.pressure,
    waterTemp,
    shortForecast: now.shortForecast,
  });
  const localAnswer = buildFishingAdvice(
    userQuestion,
    score,
    now,
    state.weather.daily,
    state.weather.hourly,
    waterTemp
  );

  const endpoint = getFischerAiEndpoint();
  if (!endpoint) {
    addAssistantMessage("assistant", localAnswer);
    dom.assistantAnswer.textContent = localAnswer;
    return;
  }

  const pendingId = addAssistantMessage("assistant", "Fischer sprawdza pogodę, łowisko i poprzednie pytania...", "thinking");
  dom.assistantAnswer.textContent = "";
  setAssistantBusy(true);
  try {
    const aiAnswer = await fetchFischerAi(
      userQuestion,
      buildFischerContext(userQuestion, score, now, state.weather.daily, state.weather.hourly, waterTemp, localAnswer),
      endpoint
    );
    if (isIncompleteFischerAnswer(aiAnswer)) {
      throw new Error("Gemini zwrócił urwaną odpowiedź");
    }
    updateAssistantMessage(pendingId, aiAnswer);
    dom.assistantAnswer.textContent = aiAnswer;
  } catch (error) {
    console.warn("Fischer AI nie odpowiedział", error);
    const fallback = `${localAnswer}\n\nGemini tym razem nie odpowiedziało poprawnie, więc Fischer pokazuje lokalną podpowiedź.`;
    updateAssistantMessage(pendingId, fallback, "warn");
    dom.assistantAnswer.textContent = fallback;
  } finally {
    setAssistantBusy(false);
  }
}

function addAssistantMessage(role, text, tone = "normal") {
  const message = {
    id: window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    role,
    text: String(text || "").trim(),
    tone,
    createdAt: new Date().toISOString(),
  };
  state.assistantMessages.push(message);
  if (state.assistantMessages.length > 14) {
    state.assistantMessages = state.assistantMessages.slice(-14);
  }
  renderAssistantChat();
  return message.id;
}

function updateAssistantMessage(id, text, tone = "normal") {
  const message = state.assistantMessages.find((item) => item.id === id);
  if (!message) return;
  message.text = String(text || "").trim();
  message.tone = tone;
  renderAssistantChat();
}

function renderAssistantChat() {
  if (!dom.assistantChat) return;
  if (!state.assistantMessages.length) {
    dom.assistantChat.innerHTML =
      '<div class="assistant-empty"><strong>Fischer jest gotowy.</strong><span>Możesz pytać o miejsce, godzinę, przynętę albo doprecyzować poprzednią odpowiedź.</span></div>';
    return;
  }

  dom.assistantChat.innerHTML = state.assistantMessages
    .map(
      (message) => `
        <div class="assistant-message is-${message.role} ${assistantToneClass(message.tone)}">
          <span class="assistant-message-label">${message.role === "user" ? "Ty" : "Fischer"}</span>
          <span>${escapeHtml(message.text)}</span>
        </div>
      `
    )
    .join("");
  dom.assistantChat.scrollTop = dom.assistantChat.scrollHeight;
}

function assistantToneClass(tone) {
  if (tone === "thinking") return "is-thinking";
  if (tone === "warn") return "is-warn";
  return "";
}

function clearAssistantChat() {
  state.assistantMessages = [];
  if (dom.assistantAnswer) dom.assistantAnswer.textContent = "";
  renderAssistantChat();
}

function setAssistantBusy(isBusy) {
  if (dom.assistantQuestion) dom.assistantQuestion.disabled = isBusy;
  const submitButton = dom.assistantForm?.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = isBusy;
}

function isIncompleteFischerAnswer(answer) {
  const text = String(answer || "").trim();
  if (text.length < 45) return true;
  return /[\s,(;:]$/.test(text) || !/[.!?)]$/.test(text);
}

function getFischerAiEndpoint() {
  return String(FISCHER_AI_ENDPOINT || localStorage.getItem("fischer-ai-endpoint") || "").trim();
}

function buildFischerContext(question, score, now, daily, hourly, waterTemp, localAnswer) {
  return {
    question: question || "podsumowanie",
    selected: {
      name: state.selected.name || "Wybrane łowisko",
      lat: state.selected.lat,
      lon: state.selected.lon,
      station: state.selected.station,
    },
    score: score.value,
    localAnswer,
    current: {
      time: now.startTime,
      weather: now.shortForecast,
      temperatureC: now.temperature,
      apparentTemperatureC: now.apparentTemperature,
      waterTemperatureC: waterTemp,
      humidityPercent: now.relativeHumidity,
      pressureHpa: now.pressure,
      precipitationMm: now.precipitation,
      precipitationProbabilityPercent: now.precipitationProbability,
      windKph: now.windSpeed,
      windDirection: directionTextLong(now.windDirection),
      windGustKph: now.windGust,
      cloudCoverPercent: now.cloudCover,
    },
    daily: {
      sunrise: daily?.sunrise,
      sunset: daily?.sunset,
      daylight: formatDuration(daily?.daylightDuration),
      uvIndexMax: daily?.uvIndexMax,
      windGustMaxKph: daily?.windGustMax,
      precipitationProbabilityMaxPercent: daily?.precipitationProbabilityMax,
      moon: moonPhaseInfo(new Date(now.startTime || Date.now())),
    },
    bestWindows: bestFishingWindows(hourly, waterTemp, 5),
    bottom: buildBottomContext(selectedBottomPoints(20)),
    baits: allBaits()
      .slice(0, 30)
      .map((bait) => ({
        name: bait.name,
        category: bait.category,
        flavor: bait.flavor,
        color: bait.color,
        use: bait.use,
      })),
    recentTrips: state.trips.slice(0, 10).map((trip) => ({
      title: trip.title,
      spot: spotNameById(trip.spotId),
      species: trip.species,
      result: trip.result,
      date: trip.date,
      bait: baitNameById(trip.baitId),
      lure: baitNameById(trip.lureId),
      depthM: trip.depth,
      note: trip.note,
      weather: trip.weatherSnapshot,
    })),
    todayPlan: dom.planOutput?.textContent?.trim() || "",
    conversation: state.assistantMessages
      .filter((message) => message.tone !== "thinking")
      .slice(-8)
      .map((message) => ({
        role: message.role,
        text: message.text,
      })),
    savedSpots: state.spots.slice(0, 8).map((spot) => ({
      name: spot.name,
      type: spot.type,
      species: spot.species,
      notes: spot.notes,
    })),
  };
}

async function fetchFischerAi(question, context, endpoint) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), FISCHER_AI_TIMEOUT_MS);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, context }),
      signal: controller.signal,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `Błąd Fischera AI: ${response.status}`);
    const answer = String(data.answer || "").trim();
    if (!answer) throw new Error("Pusta odpowiedź z Gemini");
    return answer;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function buildFishingAdvice(question, score, now, daily, hourly, waterTemp) {
  const text = normalize(question || "");
  const windows = bestFishingWindows(hourly, waterTemp, 3);
  const places = placeAdvice(now);
  const lures = lureAdvice(now, waterTemp);
  const fish = fishAdvice(now, waterTemp);
  const wind = `${formatMaybe(now.windSpeed, "km/h")} ${directionTextLong(now.windDirection)}`.trim();
  const moon = moonPhaseInfo(new Date(now.startTime || Date.now()));
  const bottom = bottomAdviceText(selectedBottomPoints(12));
  const windowsText = windows.length
    ? windows.map((item) => `${item.time} (${item.score}/100)`).join(", ")
    : "brak mocnego okna w najbliższych godzinach";
  const baitHints = suggestBaitsForPlan(dom.planSpeciesInput?.value || question || "", now, waterTemp, 5);
  const baitText = baitHints.length
    ? baitHints.map((bait) => `${bait.name}${bait.flavor ? ` (${bait.flavor})` : ""}`).join(", ")
    : lures;

  if (/kiedy|godzin|pora|czas|okno/.test(text)) {
    return `Najlepsze najbliższe okna: ${windowsText}. Przy obecnych danych najpierw sprawdzałbym świt/zmierzch oraz godziny z lekkim wiatrem i stabilnym ciśnieniem.`;
  }
  if (/dziennik|wypraw|histori|dzialalo|działało|skuteczn|wynik/.test(text)) {
    return tripStatsText() || "Dziennik wypraw jest jeszcze pusty. Zapisz kilka wypraw z wynikiem, przynętą i miejscem, a Fischer zacznie wyciągać wnioski z Twojej historii.";
  }
  if (/zanet|zanęt|przynet|przynęt|wafters|smak|kulki|pellet|robak|guma|wobler/.test(text)) {
    return `Z aktualnej bazy zacząłbym od: ${baitText}. Dobieraj kolor do wody: naturalny w czystej, jaśniejszy albo mocniej pachnący po deszczu i przy mętnej wodzie.`;
  }
  if (/gdzie|miejsce|brzeg|szukac|lowisko/.test(text)) {
    return `Szukaj przede wszystkim: ${places}. Przy wietrze ${wind || "brak danych"} zacznij od brzegu, na który spycha pokarm, zatok, trzcin i przejść głębszej wody w płytszą.`;
  }
  if (/na co|przynet|lowic|ryb|gatunek|zestaw/.test(text)) {
    return `Celowałbym w: ${fish}. Przynęty/zestaw: ${lures}. Prowadź wolniej, jeśli wiatr albo ciśnienie są trudne; szybciej obławiaj aktywne ryby, jeśli indeks jest wysoki.`;
  }
  if (/wiatr|kierunek|poryw/.test(text)) {
    return `Wiatr teraz: ${wind || "brak danych"}, porywy ${formatMaybe(now.windGust, "km/h")}. W praktyce obławiaj nawietrzny brzeg, cofki, dopływy i miejsca, gdzie fala miesza wodę.`;
  }
  if (/dno|glebok|głebok|glebokosc|głębokość|spad|kant|dol|doł|zaczep|roslinnosc|roślinność/.test(text)) {
    return bottom
      ? `${bottom} Zacznij od krawędzi spadu/kantu i zmieniaj głębokość co kilka rzutów.`
      : "Nie mam jeszcze własnych punktów dna dla tego łowiska. Dodaj 2-3 pomiary głębokości, typ dna i strukturę, a wtedy podpowiem dokładniej.";
  }
  if (/ksiezyc|slonce|uv|zmierzch|swit/.test(text)) {
    return `Słońce: ${formatClock(daily?.sunrise)}-${formatClock(daily?.sunset)}, dzień ${formatDuration(daily?.daylightDuration)}. Księżyc: ${moon.name}, ok. ${moon.illumination}% oświetlenia. Najciekawsze będą okolice świtu i zmierzchu.`;
  }

  return `Podsumowanie Fischera: warunki ${score.value}/100. Najlepsze okna: ${windowsText}. Gdzie: ${places}. Na co: ${fish}. Przynęty: ${lures}. Wiatr ${wind || "brak danych"}, ciśnienie ${formatMaybe(now.pressure, "hPa")}.${bottom ? ` ${bottom}` : ""}`;
}

function bestFishingWindows(periods, waterTemp, count) {
  if (!Array.isArray(periods)) return [];
  return periods
    .slice(0, 18)
    .map((period) => {
      const score = scoreFishingHour({
        tempC: period.temperature,
        windKph: period.windSpeed,
        precipProbability: period.precipitationProbability,
        rainMm: period.precipitation,
        pressure: period.pressure,
        waterTemp,
        shortForecast: period.shortForecast,
      });
      return {
        time: new Date(period.startTime).toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        score: score.value,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

function placeAdvice(now) {
  const wind = numberOrNull(now.windSpeed);
  const rain = numberOrNull(now.precipitationProbability);
  if (Number.isFinite(wind) && wind > 22) {
    return "zatoki osłonięte od mocnej fali, cofki, przesmyki i miejsca za trzcinami";
  }
  if (Number.isFinite(rain) && rain > 55) {
    return "dopływy, spływy deszczówki, ciemniejsze pasy wody i granice mętnej wody";
  }
  return "spady, blaty przy roślinności, trzcinowiska, pomosty, dopływy i przejścia płytko-głęboko";
}

function fishAdvice(now, waterTemp) {
  const temp = firstNumber(waterTemp, now.temperature);
  const wind = numberOrNull(now.windSpeed);
  if (Number.isFinite(temp) && temp < 8) return "okoń, sandacz i szczupak w wolniejszym prowadzeniu";
  if (Number.isFinite(temp) && temp > 20) return "karp, amur, lin rano/wieczorem oraz drapieżnik przy cieniu i tlenie";
  if (Number.isFinite(wind) && wind >= 8 && wind <= 22) return "szczupak, okoń, sandacz oraz biała ryba przy lekkiej fali";
  return "okoń, szczupak, sandacz, leszcz albo karp - zależnie od łowiska";
}

function lureAdvice(now, waterTemp) {
  const wind = numberOrNull(now.windSpeed);
  const rain = numberOrNull(now.precipitationProbability);
  const temp = firstNumber(waterTemp, now.temperature);
  if (Number.isFinite(temp) && temp > 20) return "kukurydza, pellet, method feeder, robak; na drapieżnika guma przy dnie albo wobler o zmierzchu";
  if (Number.isFinite(wind) && wind > 24) return "cięższa guma, obrotówka/wahadłówka, feeder z cięższym koszykiem albo zestaw przy dnie";
  if (Number.isFinite(rain) && rain > 55) return "zapachowe przynęty, feeder, robaki, gumy w naturalnych kolorach przy dopływach";
  return "gumy 5-9 cm, obrotówki, wobler przy roślinności, feeder lub method przy spokojniejszych miejscach";
}

async function renderFishingPlan(mode = "planned") {
  if (mode === "today" && dom.planDateInput) dom.planDateInput.value = localDateValue();

  await preparePlanSpotForPlan();
  if (!state.weather?.hourly?.length) {
    setStatus("Pobieram pogodę do planu wyprawy...");
    await loadWeather();
  }

  if (!state.weather?.hourly?.length) {
    dom.planOutput.innerHTML =
      '<div class="empty-state">Najpierw pobierz pogodę dla łowiska, wtedy ułożę plan.</div>';
    return;
  }

  const now = state.weather.current;
  const waterTemp = hydroWaterTemp(state.water?.hydro);
  const dateValue = dom.planDateInput?.value || localDateValue();
  const species = dom.planSpeciesInput?.value.trim() || state.selected.species || "ryby z tego łowiska";
  const periodsForDay = periodsByDate(state.weather.hourly, dateValue);
  const planPeriods = periodsForDay.length ? periodsForDay : state.weather.hourly.slice(0, 24);
  const scoredWindows = scorePlanPeriods(planPeriods, waterTemp).slice(0, 4);
  const bestText = scoredWindows.length
    ? scoredWindows.map((item) => `${item.time} (${item.score}/100)`).join(", ")
    : "brak wyraźnego okna";
  const baits = suggestBaitsForPlan(species, now, waterTemp, 5);
  const baitsHtml = baits.length
    ? baits
        .map(
          (bait) => `
            <span class="plan-chip">${escapeHtml(bait.name)}</span>
          `
        )
        .join("")
    : `<span class="plan-chip">${escapeHtml(lureAdvice(now, waterTemp))}</span>`;
  const bottomText = bottomAdviceText(selectedBottomPoints(16));
  const title = mode === "today" ? "Plan na dzisiaj" : "Plan wyprawy";
  const dateLabel = formatPlanDate(dateValue);

  dom.planOutput.innerHTML = `
    <div class="plan-main">
      <strong>${escapeHtml(title)}: ${escapeHtml(state.selected.name || "wybrane łowisko")}</strong>
      <span>${escapeHtml(dateLabel)} · cel: ${escapeHtml(species)}</span>
    </div>
    <div class="plan-chips">
      <span class="plan-chip">Najlepsze okna: ${escapeHtml(bestText)}</span>
      <span class="plan-chip">Wiatr: ${escapeHtml(formatMaybe(now.windSpeed, "km/h"))} ${escapeHtml(directionTextLong(now.windDirection))}</span>
      <span class="plan-chip">Ciśnienie: ${escapeHtml(formatMaybe(now.pressure, "hPa"))}</span>
    </div>
    <div>
      <strong>Gdzie zacząć:</strong>
      <span>${escapeHtml(placeAdvice(now))}${bottomText ? ` ${escapeHtml(bottomText)}` : ""}</span>
    </div>
    <div>
      <strong>Na co:</strong>
      <div class="plan-chips">${baitsHtml}</div>
    </div>
  `;
  setStatus("Plan wyprawy gotowy.");
}

function renderPlanOutput() {
  if (!dom.planOutput) return;
  if (!state.weather?.hourly?.length && !dom.planOutput.textContent.trim()) dom.planOutput.innerHTML = "";
}

async function preparePlanSpotForPlan() {
  const spotId = dom.planSpotSelect?.value || "";
  if (!spotId || state.selected.id === spotId) return;
  const spot = state.spots.find((item) => item.id === spotId);
  if (!spot) return;
  selectLocation({ ...spot, station: spot.station || state.selected.station || "" });
  if (state.map) state.map.setView([spot.lat, spot.lon], Math.max(state.map.getZoom(), 11));
  await loadWeather();
}

function periodsByDate(periods, dateValue) {
  return (periods || []).filter((period) => localDateValue(new Date(period.startTime)) === dateValue);
}

function scorePlanPeriods(periods, waterTemp) {
  return (periods || [])
    .map((period) => {
      const score = scoreFishingHour({
        tempC: period.temperature,
        windKph: period.windSpeed,
        precipProbability: period.precipitationProbability,
        rainMm: period.precipitation,
        pressure: period.pressure,
        waterTemp,
        shortForecast: period.shortForecast,
      });
      return {
        time: new Date(period.startTime).toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        score: score.value,
      };
    })
    .sort((a, b) => b.score - a.score);
}

function suggestBaitsForPlan(speciesText, now = {}, waterTemp = null, count = 5) {
  const query = normalize(speciesText);
  const rain = numberOrNull(now.precipitationProbability);
  const temp = firstNumber(waterTemp, now.temperature);
  const baits = allBaits();
  return baits
    .map((bait, index) => {
      const text = normalize(`${bait.name} ${bait.category} ${bait.flavor} ${bait.color} ${bait.use}`);
      let score = 10 - index * 0.01;
      if (/karp|amur|lin|leszcz|karas|feeder|method|splawik|bia/.test(query)) {
        if (/wafters|pellet|zaneta|robaki|kukurydza|method|feeder|slod/.test(text)) score += 12;
      }
      if (/sandacz|okon|okoń|szczupak|drapiez|drapie/.test(query)) {
        if (/guma|wobler|natural|jaskraw/.test(text)) score += 12;
      }
      if (Number.isFinite(rain) && rain > 45 && /rybn|czosnek|robaki|jaskraw|natural/.test(text)) score += 5;
      if (Number.isFinite(temp) && temp > 19 && /slod|miod|kukurydza|pellet|scopex|wanilia/.test(text)) score += 5;
      if (Number.isFinite(temp) && temp < 10 && /czosnek|rybn|natural|robaki/.test(text)) score += 5;
      return { ...bait, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

function allBaits() {
  return [...defaultBaits, ...state.baits];
}

function renderBaits() {
  if (!dom.baitList) return;
  const baits = allBaits();
  dom.baitList.innerHTML = baits
    .map((bait) => {
      const isDefault = String(bait.id).startsWith("default-");
      return `
        <article class="bait-item">
          <div>
            <strong>${escapeHtml(bait.name)}</strong>
            <small>${escapeHtml([bait.category, bait.flavor, bait.color].filter(Boolean).join(" · "))}</small>
            <span>${escapeHtml(bait.use || "Brak notatki.")}</span>
          </div>
          ${
            isDefault
              ? '<span class="soft-badge">start</span>'
              : `<button class="tiny-button" type="button" title="Usuń z bazy" data-bait-id="${bait.id}">
                  <i data-lucide="trash-2"></i>
                </button>`
          }
        </article>
      `;
    })
    .join("");
  dom.baitList.querySelectorAll("[data-bait-id]").forEach((button) => {
    button.addEventListener("click", () => deleteBait(button.dataset.baitId));
  });
  syncBaitSelects();
  if (window.lucide) window.lucide.createIcons();
}

function handleBaitSubmit(event) {
  event.preventDefault();
  const name = dom.baitNameInput.value.trim();
  if (!name) {
    setStatus("Wpisz nazwę przynęty albo zanęty.", "warn");
    return;
  }
  state.baits = [
    {
      id: createId(),
      name,
      category: dom.baitCategoryInput.value,
      flavor: dom.baitFlavorInput.value.trim(),
      color: dom.baitColorInput.value.trim(),
      use: dom.baitUseInput.value.trim(),
      createdAt: new Date().toISOString(),
    },
    ...state.baits,
  ];
  dom.baitForm.reset();
  saveStorage();
  renderBaits();
  setStatus("Dodano przynętę do bazy.");
}

function deleteBait(id) {
  state.baits = state.baits.filter((bait) => bait.id !== id);
  state.trips = state.trips.map((trip) => ({
    ...trip,
    baitId: trip.baitId === id ? "" : trip.baitId,
    lureId: trip.lureId === id ? "" : trip.lureId,
  }));
  saveStorage();
  renderBaits();
  renderAlbum();
}

function syncBaitSelects() {
  const options =
    '<option value="">Brak</option>' +
    allBaits()
      .map((bait) => `<option value="${bait.id}">${escapeHtml(bait.name)}</option>`)
      .join("");
  [dom.tripBaitSelect, dom.tripLureSelect].forEach((select) => {
    if (!select) return;
    const value = select.value;
    select.innerHTML = options;
    select.value = value;
  });
}

function baitNameById(id) {
  if (!id) return "";
  return allBaits().find((bait) => bait.id === id)?.name || "";
}

function spotNameById(id) {
  if (!id) return "";
  return state.spots.find((spot) => spot.id === id)?.name || "";
}

function tripStatsText() {
  if (!state.trips.length) return "";
  const productive = state.trips.filter((trip) => /branie|złowiona|zlowiona|spinka/.test(normalize(trip.result)));
  const baitCounts = new Map();
  productive.forEach((trip) => {
    [trip.baitId, trip.lureId].forEach((id) => {
      const name = baitNameById(id);
      if (!name) return;
      baitCounts.set(name, (baitCounts.get(name) || 0) + 1);
    });
  });
  const topBaits = [...baitCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, count]) => `${name} (${count})`)
    .join(", ");
  const last = state.trips
    .slice(0, 3)
    .map((trip) => `${trip.date || "bez daty"}: ${trip.result || "notatka"}${trip.species ? `, ${trip.species}` : ""}`)
    .join("; ");
  return `W dzienniku masz ${state.trips.length} wypraw, z czego ${productive.length} miało branie, rybę albo spinkę. Najczęściej działało: ${topBaits || "za mało danych o przynętach"}. Ostatnie wpisy: ${last}.`;
}

function currentWeatherSnapshot() {
  if (!state.weather?.current) return null;
  const now = state.weather.current;
  const waterTemp = hydroWaterTemp(state.water?.hydro);
  const score = scoreFishingHour({
    tempC: now.temperature,
    windKph: now.windSpeed,
    precipProbability: now.precipitationProbability,
    rainMm: now.precipitation,
    pressure: now.pressure,
    waterTemp,
    shortForecast: now.shortForecast,
  });
  return {
    time: now.startTime,
    score: score.value,
    weather: now.shortForecast,
    temperatureC: now.temperature,
    windKph: now.windSpeed,
    windDirection: directionTextLong(now.windDirection),
    pressureHpa: now.pressure,
    precipitationProbabilityPercent: now.precipitationProbability,
    waterTemperatureC: waterTemp,
  };
}

function formatPlanDate(dateValue) {
  const date = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue || "bez daty";
  return date.toLocaleDateString("pl-PL", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
}

function localDateValue(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createId() {
  return window.crypto?.randomUUID
    ? window.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function renderHourly(periods, waterTemp) {
  dom.hourlyList.innerHTML = periods
    .map((period) => {
      const score = scoreFishingHour({
        tempC: period.temperature,
        windKph: period.windSpeed,
        precipProbability: period.precipitationProbability,
        rainMm: period.precipitation,
        pressure: period.pressure,
        waterTemp,
        shortForecast: period.shortForecast,
      });
      const time = new Date(period.startTime).toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `
        <article class="hour-card">
          <div class="hour-time">${escapeHtml(time)}</div>
          <div class="hour-detail">
            <strong>${escapeHtml(period.shortForecast || "Prognoza")}</strong>
            <small>${formatMaybe(period.temperature, "°C")} · ${formatMaybe(period.windSpeed, "km/h")} · opad ${formatMaybe(period.precipitationProbability, "%")}</small>
          </div>
          <div class="hour-score" style="background:${scoreColor(score.value)}">${score.value}</div>
        </article>
      `;
    })
    .join("");
}

function renderWater(data) {
  if (!data) {
    dom.marineList.innerHTML =
      '<div class="empty-state">Tu pojawia się najbliższa stacja IMGW i najbliższy wodowskaz dla wybranego łowiska.</div>';
    return;
  }

  const synop = data.synop;
  const hydro = data.hydro;
  const synopTime = synop
    ? `${synop.data_pomiaru || ""} ${String(synop.godzina_pomiaru || "").padStart(2, "0")}:00`
    : "brak danych";
  const hydroName = hydro ? `${hydro.stacja || "Stacja"}${hydro.rzeka ? ` / ${hydro.rzeka}` : ""}` : "brak danych";

  dom.marineList.innerHTML = [
    ["Stacja IMGW", synop ? `${synop.stacja} (${synop.id_stacji})` : "brak danych"],
    ["Pomiar stacji", synopTime],
    ["Wiatr stacji", synop ? `${formatMaybe(synopWindKph(synop), "km/h")} ${directionText(synopNumber(synop, "kierunek_wiatru"))}` : "brak danych"],
    ["Opad stacji", synop ? formatMaybe(synopNumber(synop, "suma_opadu"), "mm") : "brak danych"],
    ["Wodowskaz", hydroName],
    ["Stan wody", hydro ? `${formatMaybe(numberOrNull(hydro.stan_wody), "cm")} · przepływ ${formatMaybe(numberOrNull(hydro.przeplyw), "m³/s")}` : "brak danych"],
    ["Temp. wody", hydro ? formatMaybe(hydroWaterTemp(hydro), "°C") : "brak danych"],
  ]
    .map(
      ([label, value]) => `
        <div class="marine-item">
          <strong>${escapeHtml(label)}</strong>
          <span>${escapeHtml(value)}</span>
        </div>
      `
    )
    .join("");
}

function scoreFishingHour({
  tempC,
  windKph,
  precipProbability,
  rainMm,
  pressure,
  waterTemp,
  shortForecast,
}) {
  let score = 72;
  const reasons = [];
  const text = normalize(String(shortForecast || ""));

  if (Number.isFinite(tempC)) {
    if (tempC >= 10 && tempC <= 24) score += 10;
    else if (tempC < 2 || tempC > 31) {
      score -= 16;
      reasons.push("temperatura jest wymagająca");
    } else score -= 5;
  }

  if (Number.isFinite(windKph)) {
    if (windKph >= 6 && windKph <= 22) score += 12;
    else if (windKph > 38) {
      score -= 24;
      reasons.push("wiatr może utrudnić łowienie");
    } else if (windKph < 3) {
      score -= 6;
      reasons.push("cisza może osłabić brania przy czystej wodzie");
    } else score -= 8;
  }

  if (Number.isFinite(precipProbability)) {
    if (precipProbability > 0 && precipProbability <= 35) score += 4;
    if (precipProbability > 65) {
      score -= 15;
      reasons.push("duże ryzyko opadów");
    }
  }

  if (Number.isFinite(rainMm)) {
    if (rainMm > 0 && rainMm <= 1.5) score += 3;
    if (rainMm > 5) score -= 12;
  }

  if (Number.isFinite(pressure)) {
    if (pressure >= 1008 && pressure <= 1022) score += 7;
    else if (pressure < 995 || pressure > 1032) {
      score -= 10;
      reasons.push("ciśnienie jest poza komfortowym zakresem");
    }
  }

  if (Number.isFinite(waterTemp)) {
    if (waterTemp >= 8 && waterTemp <= 22) score += 6;
    else if (waterTemp < 4 || waterTemp > 27) {
      score -= 8;
      reasons.push("temperatura wody może spowalniać ryby");
    }
  }

  if (/burza|thunder|storm|grad|hail/.test(text)) {
    score -= 35;
    reasons.push("burze oznaczają przerwę dla bezpieczeństwa");
  }
  if (/mgla|fog|mist/.test(text)) score -= 6;
  if (/snieg|lod|freezing|snow|ice/.test(text)) score -= 12;

  score = clamp(Math.round(score), 5, 98);
  const label = score >= 82 ? "bardzo dobre" : score >= 66 ? "dobre" : score >= 48 ? "średnie" : "trudne";
  const advice =
    reasons.length > 0
      ? `Warunki: ${label}. Uwaga: ${reasons.slice(0, 2).join(", ")}.`
      : `Warunki: ${label}. Szukaj ryby przy spadach, trzcinach, dopływach i miejscach z lekkim ruchem wody.`;
  return { value: score, advice };
}

function setScore(value) {
  if (!Number.isFinite(value)) {
    dom.scoreValue.textContent = "--";
    dom.scoreRing.style.background =
      "radial-gradient(circle at center, #ffffff 61%, transparent 62%), conic-gradient(var(--line) 0deg, var(--line) 0deg)";
    return;
  }
  const degrees = Math.round((value / 100) * 360);
  dom.scoreValue.textContent = String(value);
  dom.scoreRing.style.background = `radial-gradient(circle at center, #ffffff 61%, transparent 62%), conic-gradient(${scoreColor(
    value
  )} ${degrees}deg, var(--line) ${degrees}deg)`;
}

function setStatus(message, tone = "normal") {
  dom.statusLine.textContent = message;
  dom.statusLine.style.color = tone === "warn" ? "var(--rose)" : "var(--muted)";
}

function setLoading(isLoading) {
  dom.loadWeatherButton.disabled = isLoading;
  dom.refreshButton.disabled = isLoading;
  dom.loadWeatherButton.querySelector("span").textContent = isLoading ? "Pobieram..." : "Pobierz pogodę";
}

function updateCurrentMarker() {
  if (!state.map || !window.L) return;
  const latLng = [state.selected.lat, state.selected.lon];
  if (!state.currentMarker) {
    state.currentMarker = L.marker(latLng, { title: "Wybrane miejsce" }).addTo(state.map);
  } else {
    state.currentMarker.setLatLng(latLng);
  }
  state.currentMarker.bindPopup(currentPopupMarkup());
  renderSpotMarkers();
}

function currentPopupMarkup() {
  return `
    <div class="popup-title">Wybrane miejsce</div>
    <div>${state.selected.lat}, ${state.selected.lon}</div>
    <div>IMGW: ${escapeHtml(state.selected.station || "najbliższa stacja")}</div>
    <div class="popup-actions">
      <button type="button" onclick="window.fishingApp.loadWeather()">Pogoda</button>
    </div>
  `;
}

function renderSpotMarkers() {
  if (!state.spotLayer || !window.L) return;
  state.spotLayer.clearLayers();
  state.spots.forEach((spot) => {
    const marker = L.marker([spot.lat, spot.lon], { title: spot.name }).addTo(state.spotLayer);
    marker.bindPopup(`
      <div class="popup-title">${escapeHtml(spot.name)}</div>
      <div>${escapeHtml(spot.type)} · ${escapeHtml(spot.species || "ryby")}</div>
      <div>${spot.lat}, ${spot.lon}</div>
      <div class="popup-actions">
        <button type="button" onclick="window.fishingApp.selectSpot('${spot.id}')">Wybierz</button>
      </div>
    `);
  });
}

function handleSpotSubmit(event) {
  event.preventDefault();
  const name = dom.spotNameInput.value.trim();
  if (!name) return;
  const spot = {
    id: crypto.randomUUID(),
    name,
    type: dom.spotTypeInput.value,
    species: dom.spotSpeciesInput.value.trim(),
    notes: dom.spotNotesInput.value.trim(),
    lat: state.selected.lat,
    lon: state.selected.lon,
    station: dom.stationInput.value.trim(),
    createdAt: new Date().toISOString(),
  };
  state.spots.unshift(spot);
  saveStorage();
  renderSpots();
  renderSpotMarkers();
  dom.spotForm.reset();
  dom.spotTypeInput.value = "Jezioro";
}

function handleDepthSubmit(event) {
  event.preventDefault();
  const depth = Number(dom.depthValueInput?.value);
  if (!Number.isFinite(depth) || depth <= 0) {
    setStatus("Wpisz poprawną głębokość punktu dna.", "warn");
    return;
  }

  const distanceM = Number(dom.depthDistanceInput?.value);
  const point = {
    id: window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    lat: state.selected.lat,
    lon: state.selected.lon,
    spotId: state.selected.id || "",
    spotName: state.selected.name || "Wybrane łowisko",
    station: state.selected.station || "",
    depthM: roundNumber(depth),
    distanceM: Number.isFinite(distanceM) && distanceM >= 0 ? Math.round(distanceM) : null,
    bottomType: dom.bottomTypeInput?.value || "nieznane",
    structure: dom.structureInput?.value || "blat",
    note: dom.depthNoteInput?.value?.trim() || "",
    createdAt: new Date().toISOString(),
  };

  state.bottomPoints.unshift(point);
  saveStorage();
  renderBottomProfile();
  dom.depthForm.reset();
  if (dom.bottomTypeInput) dom.bottomTypeInput.value = "nieznane";
  if (dom.structureInput) dom.structureInput.value = "blat";
  setStatus(`Dodano punkt dna: ${point.depthM} m, ${point.structure}.`);
}

function renderBottomProfile() {
  if (!dom.bottomPointList || !dom.bottomProfile || !dom.bottomSummary) return;
  const points = selectedBottomPoints(30);
  if (!points.length) {
    dom.bottomSummary.innerHTML =
      '<div class="empty-state">Dodaj własne pomiary głębokości dla tego łowiska. Fischer użyje ich przy podpowiedziach o spadach, kantach i miejscówkach.</div>';
    dom.bottomProfile.innerHTML = "";
    dom.bottomPointList.innerHTML = "";
    return;
  }

  dom.bottomSummary.textContent = bottomAdviceText(points);
  const maxDepth = Math.max(...points.map((point) => point.depthM), 1);
  dom.bottomProfile.innerHTML = points
    .slice()
    .sort((a, b) => bottomSortValue(a) - bottomSortValue(b))
    .map((point) => {
      const height = clamp(Math.round((point.depthM / maxDepth) * 100), 14, 100);
      return `
        <div class="bottom-bar" title="${escapeHtml(bottomPointTitle(point))}">
          <div class="bottom-bar-fill" style="--h:${height}%"></div>
          <strong>${formatMaybe(point.depthM, "m")}</strong>
          <small>${escapeHtml(distanceLabel(point))}</small>
        </div>
      `;
    })
    .join("");

  dom.bottomPointList.innerHTML = points
    .map(
      (point) => `
        <article class="bottom-point">
          <div>
            <strong>${formatMaybe(point.depthM, "m")} · ${escapeHtml(point.structure)} · ${escapeHtml(point.bottomType)}</strong>
            <small>${escapeHtml(distanceLabel(point))}${point.note ? ` · ${escapeHtml(point.note)}` : ""}</small>
          </div>
          <button class="tiny-button" type="button" title="Usuń punkt dna" data-depth-id="${point.id}">
            <i data-lucide="x"></i>
          </button>
        </article>
      `
    )
    .join("");
  dom.bottomPointList.querySelectorAll("[data-depth-id]").forEach((button) => {
    button.addEventListener("click", () => deleteDepthPoint(button.dataset.depthId));
  });
  if (window.lucide) window.lucide.createIcons();
}

function deleteDepthPoint(id) {
  state.bottomPoints = state.bottomPoints.filter((point) => point.id !== id);
  saveStorage();
  renderBottomProfile();
}

function selectedBottomPoints(limit = 20) {
  if (!Array.isArray(state.bottomPoints)) return [];
  return state.bottomPoints
    .map((point) => ({
      ...point,
      distanceToSelectedKm: haversineKm(state.selected.lat, state.selected.lon, point.lat, point.lon),
    }))
    .filter((point) => {
      if (state.selected.id && point.spotId === state.selected.id) return true;
      return Number.isFinite(point.distanceToSelectedKm) && point.distanceToSelectedKm <= 1.5;
    })
    .sort((a, b) => {
      const bySpot = Number(Boolean(b.spotId && b.spotId === state.selected.id)) - Number(Boolean(a.spotId && a.spotId === state.selected.id));
      if (bySpot) return bySpot;
      return bottomSortValue(a) - bottomSortValue(b);
    })
    .slice(0, limit);
}

function bottomSortValue(point) {
  return Number.isFinite(point.distanceM) ? point.distanceM : new Date(point.createdAt || 0).getTime();
}

function bottomPointTitle(point) {
  return `${formatMaybe(point.depthM, "m")} · ${point.structure} · ${point.bottomType}${point.note ? ` · ${point.note}` : ""}`;
}

function distanceLabel(point) {
  if (Number.isFinite(point.distanceM)) return `${point.distanceM} m od brzegu`;
  if (Number.isFinite(point.distanceToSelectedKm)) return `${roundNumber(point.distanceToSelectedKm * 1000)} m od punktu`;
  return "bez dystansu";
}

function bottomAdviceText(points) {
  if (!points.length) return "";
  const depths = points.map((point) => point.depthM).filter(Number.isFinite);
  const min = Math.min(...depths);
  const max = Math.max(...depths);
  const structures = uniqueText(points.map((point) => point.structure)).slice(0, 4).join(", ");
  const bottoms = uniqueText(points.map((point) => point.bottomType).filter((item) => item && item !== "nieznane")).slice(0, 3).join(", ");
  const key = points.find((point) => /spad|kant|dołek|górka|zaczep|trzciny/i.test(point.structure)) || points[0];
  return `Szkic dna: ${points.length} pkt, zakres ${roundNumber(min)}-${roundNumber(max)} m. Struktury: ${structures || "brak"}. ${bottoms ? `Dno: ${bottoms}. ` : ""}Najciekawszy punkt: ${formatMaybe(key.depthM, "m")} ${key.structure}${key.note ? ` (${key.note})` : ""}.`;
}

function buildBottomContext(points) {
  return {
    summary: bottomAdviceText(points),
    points: points.slice(0, 12).map((point) => ({
      depthM: point.depthM,
      distanceM: point.distanceM,
      bottomType: point.bottomType,
      structure: point.structure,
      note: point.note,
    })),
  };
}

function uniqueText(items) {
  return [...new Set(items.map((item) => String(item || "").trim()).filter(Boolean))];
}

function renderSpots() {
  syncPhotoSpotSelect();
  if (!state.spots.length) {
    dom.spotList.innerHTML = '<div class="empty-state">Kliknij mapę i zapisz pierwsze łowisko.</div>';
    return;
  }
  dom.spotList.innerHTML = state.spots
    .map(
      (spot) => `
        <article class="spot-item">
          <div>
            <strong>${escapeHtml(spot.name)}</strong>
            <div class="spot-meta">
              ${escapeHtml(spot.type)} · ${escapeHtml(spot.species || "bez gatunków")}<br />
              ${spot.lat}, ${spot.lon}${spot.station ? ` · IMGW ${escapeHtml(spot.station)}` : ""}
            </div>
          </div>
          <div class="spot-buttons">
            <button class="tiny-button" type="button" title="Wybierz" data-spot-action="select" data-id="${spot.id}">
              <i data-lucide="navigation"></i>
            </button>
            <button class="tiny-button" type="button" title="Usuń" data-spot-action="delete" data-id="${spot.id}">
              <i data-lucide="x"></i>
            </button>
          </div>
        </article>
      `
    )
    .join("");
  dom.spotList.querySelectorAll("[data-spot-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      if (button.dataset.spotAction === "select") selectSpot(id);
      if (button.dataset.spotAction === "delete") deleteSpot(id);
    });
  });
  if (window.lucide) window.lucide.createIcons();
}

function selectSpot(id) {
  const spot = state.spots.find((item) => item.id === id);
  if (!spot) return;
  selectLocation({ ...spot, station: spot.station || "" });
  if (state.map) state.map.setView([spot.lat, spot.lon], 12);
  loadWeather();
}

function deleteSpot(id) {
  state.spots = state.spots.filter((spot) => spot.id !== id);
  state.photos = state.photos.map((photo) =>
    photo.spotId === id ? { ...photo, spotId: "" } : photo
  );
  state.trips = state.trips.map((trip) =>
    trip.spotId === id ? { ...trip, spotId: "" } : trip
  );
  state.bottomPoints = state.bottomPoints.map((point) =>
    point.spotId === id ? { ...point, spotId: "" } : point
  );
  saveStorage();
  renderSpots();
  renderSpotMarkers();
  renderBottomProfile();
  renderAlbum();
}

async function handlePhotoSubmit(event) {
  event.preventDefault();
  const files = Array.from(dom.photoInput.files || []);
  const title = dom.tripTitleInput.value.trim();
  const species = dom.photoSpeciesInput.value.trim();
  const note = dom.photoNoteInput.value.trim();
  const hasText = title || species || note || dom.tripBaitSelect.value || dom.tripLureSelect.value;
  if (!files.length && !hasText) {
    setPhotoStatus("Wpisz chociaż krótką notatkę albo dodaj zdjęcie.", "warn");
    setStatus("Dziennik potrzebuje notatki, wyniku albo zdjęcia.", "warn");
    return;
  }

  setStatus("Zapisuję wyprawę w dzienniku...");
  setPhotoStatus(
    files.length ? `Przygotowuję ${photoCountLabel(files.length)} do zapisu...` : "Zapisuję wpis bez zdjęcia...",
    "working"
  );
  try {
    const tripPhotos = [];
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      setPhotoStatus(`Zapisuje ${index + 1}/${files.length}: ${file.name}`, "working");
      const dataUrl = await resizeImage(file, 1400, 0.82);
      tripPhotos.push({
        id: createId(),
        src: dataUrl,
        name: file.name,
      });
    }

    const trip = {
      id: createId(),
      title,
      spotId: dom.photoSpotSelect.value,
      species,
      result: dom.tripResultInput.value,
      date: dom.photoDateInput.value || localDateValue(),
      depth: numberOrNull(dom.tripDepthInput.value),
      baitId: dom.tripBaitSelect.value,
      lureId: dom.tripLureSelect.value,
      note,
      photos: tripPhotos,
      weatherSnapshot: currentWeatherSnapshot(),
      bottom: buildBottomContext(selectedBottomPoints(16)),
      createdAt: new Date().toISOString(),
    };

    state.trips = [trip, ...state.trips];
    saveStorage();
    dom.photoForm.reset();
    resetPhotoPicker();
    dom.photoDateInput.valueAsDate = new Date();
    syncBaitSelects();
    renderAlbum();
    setPhotoStatus(
      files.length ? `Zapisano wyprawę i ${photoCountLabel(tripPhotos.length)}.` : "Zapisano wyprawę bez zdjęcia.",
      "success"
    );
    setStatus("Dodano wpis do dziennika wypraw.");
  } catch (error) {
    console.error(error);
    setPhotoStatus("Nie udało się zapisać wyprawy. Spróbuj mniejszy plik albo mniej zdjęć naraz.", "warn");
    setStatus("Nie udało się zapisać wyprawy. Możliwe, że pamięć przeglądarki jest pełna.", "warn");
  }
}

function renderAlbum() {
  const legacyPhotos = state.photos || [];
  if (!state.trips.length && !legacyPhotos.length) {
    dom.albumGrid.innerHTML =
      '<div class="empty-state">Dziennik jest pusty. Zapisz pierwszą wyprawę, a Fischer zacznie widzieć Twoją historię łowienia.</div>';
    return;
  }

  const tripCards = state.trips
    .map((trip) => {
      const spotName = spotNameById(trip.spotId);
      const cover = trip.photos?.[0];
      const title = trip.title || trip.species || "Wyprawa";
      const weather = trip.weatherSnapshot;
      const tags = [
        trip.result,
        trip.species,
        Number.isFinite(trip.depth) ? `${trip.depth} m` : "",
        baitNameById(trip.baitId),
        baitNameById(trip.lureId),
        trip.photos?.length > 1 ? `${trip.photos.length} zdjęcia` : "",
      ].filter(Boolean);
      return `
        <article class="photo-card">
          ${
            cover
              ? `<img src="${cover.src}" alt="${escapeHtml(title)}" loading="lazy" />`
              : `<div class="trip-cover">${escapeHtml(title)}</div>`
          }
          <div class="photo-card-body">
            <strong>${escapeHtml(title)}</strong>
            <small>${escapeHtml(trip.date || "")}${spotName ? ` · ${escapeHtml(spotName)}` : ""}</small>
            <div class="trip-tags">
              ${tags.map((tag) => `<span class="trip-tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
            ${
              weather
                ? `<small>${escapeHtml(weather.weather || "pogoda")} · ${escapeHtml(formatMaybe(weather.temperatureC, "°C"))} · wiatr ${escapeHtml(formatMaybe(weather.windKph, "km/h"))}</small>`
                : ""
            }
            <span class="trip-note">${escapeHtml(trip.note || "Brak notatki.")}</span>
            <div class="photo-card-actions">
              <button class="tiny-button" type="button" title="Usuń wpis" data-trip-id="${trip.id}">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  const legacyCards = legacyPhotos
    .map((photo) => {
      const spotName = spotNameById(photo.spotId);
      return `
        <article class="photo-card">
          <img src="${photo.src}" alt="${escapeHtml(photo.species || photo.name || "Zdjęcie z wyprawy")}" loading="lazy" />
          <div class="photo-card-body">
            <strong>${escapeHtml(photo.species || "Stare zdjęcie z albumu")}</strong>
            <small>${escapeHtml(photo.date || "")}${spotName ? ` · ${escapeHtml(spotName)}` : ""}</small>
            <span class="trip-note">${escapeHtml(photo.note || photo.name || "")}</span>
            <div class="photo-card-actions">
              <button class="tiny-button" type="button" title="Usuń zdjęcie" data-photo-id="${photo.id}">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  dom.albumGrid.innerHTML = tripCards + legacyCards;
  dom.albumGrid.querySelectorAll("[data-trip-id]").forEach((button) => {
    button.addEventListener("click", () => deleteTrip(button.dataset.tripId));
  });
  dom.albumGrid.querySelectorAll("[data-photo-id]").forEach((button) => {
    button.addEventListener("click", () => deletePhoto(button.dataset.photoId));
  });
  if (window.lucide) window.lucide.createIcons();
}

function deleteTrip(id) {
  state.trips = state.trips.filter((trip) => trip.id !== id);
  saveStorage();
  renderAlbum();
}

function deletePhoto(id) {
  state.photos = state.photos.filter((photo) => photo.id !== id);
  saveStorage();
  renderAlbum();
}

function clearAlbum() {
  if (!state.trips.length && !state.photos.length) return;
  const confirmed = confirm("Usunąć cały lokalny dziennik wypraw i stare zdjęcia?");
  if (!confirmed) return;
  state.trips = [];
  state.photos = [];
  saveStorage();
  renderAlbum();
}

function syncPhotoSpotSelect() {
  const spotOptions = state.spots
    .map((spot) => `<option value="${spot.id}">${escapeHtml(spot.name)}</option>`)
    .join("");
  if (dom.photoSpotSelect) {
    const currentValue = dom.photoSpotSelect.value;
    dom.photoSpotSelect.innerHTML = '<option value="">Bez przypisania</option>' + spotOptions;
    dom.photoSpotSelect.value = currentValue;
  }
  if (dom.planSpotSelect) {
    const currentValue = dom.planSpotSelect.value;
    dom.planSpotSelect.innerHTML = '<option value="">Aktualne miejsce</option>' + spotOptions;
    dom.planSpotSelect.value = currentValue;
  }
}

function resizeImage(file, maxSize, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function exportData() {
  const blob = new Blob(
    [
      JSON.stringify(
        {
          exportedAt: new Date().toISOString(),
          version: 3,
          selected: state.selected,
          spots: state.spots,
          photos: state.photos,
          trips: state.trips,
          baits: state.baits,
          bottomPoints: state.bottomPoints,
        },
        null,
        2
      ),
    ],
    { type: "application/json" }
  );
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `pogoda-wedkarska-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function importData() {
  const file = dom.importDataInput.files?.[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    state.spots = Array.isArray(data.spots) ? data.spots : [];
    state.photos = Array.isArray(data.photos) ? data.photos : [];
    state.trips = Array.isArray(data.trips) ? data.trips : [];
    state.baits = Array.isArray(data.baits) ? data.baits : [];
    state.bottomPoints = Array.isArray(data.bottomPoints) ? data.bottomPoints : [];
    if (Number.isFinite(Number(data.selected?.lat)) && Number.isFinite(Number(data.selected?.lon))) {
      state.selected = data.selected;
      hydrateInputs();
      updateCurrentMarker();
    }
    saveStorage();
    renderSpots();
    renderSpotMarkers();
    renderBaits();
    renderBottomProfile();
    renderAlbum();
    setStatus("Import zakończony.");
    closeDrawer();
  } catch (error) {
    console.error(error);
    setStatus("Nie udało się zaimportować pliku JSON.", "warn");
  } finally {
    dom.importDataInput.value = "";
  }
}

function pickSynopStation(rows, selected) {
  if (!Array.isArray(rows) || !rows.length) return null;
  const stationText = normalize(selected.station || "");
  if (stationText) {
    const exact = rows.find(
      (row) => normalize(row.stacja) === stationText || normalize(row.id_stacji) === stationText
    );
    if (exact) return exact;
    const partial = rows.find((row) => normalize(row.stacja).includes(stationText));
    if (partial) return partial;
  }

  const nearest = findNearestImgwStation(selected.lat, selected.lon);
  if (nearest) {
    const found = rows.find((row) => normalize(row.stacja) === normalize(nearest.name));
    if (found) return found;
  }
  return rows[0];
}

function pickNearestHydroStation(rows, lat, lon) {
  if (!Array.isArray(rows) || !rows.length) return null;
  let best = null;
  let bestDistance = Infinity;
  rows.forEach((row) => {
    const rowLat = numberOrNull(row.lat);
    const rowLon = numberOrNull(row.lon);
    if (!Number.isFinite(rowLat) || !Number.isFinite(rowLon)) return;
    const distance = haversineKm(lat, lon, rowLat, rowLon);
    if (distance < bestDistance) {
      best = row;
      bestDistance = distance;
    }
  });
  return best;
}

function findNearestImgwStation(lat, lon) {
  let best = null;
  let bestDistance = Infinity;
  imgwStations.forEach((station) => {
    const distance = haversineKm(lat, lon, station.lat, station.lon);
    if (distance < bestDistance) {
      best = station;
      bestDistance = distance;
    }
  });
  return best;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const dLat = toRad(Number(lat2) - Number(lat1));
  const dLon = toRad(Number(lon2) - Number(lon1));
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(Number(lat1))) *
      Math.cos(toRad(Number(lat2))) *
      Math.sin(dLon / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(a));
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function weatherDescription(code) {
  const numeric = Number(code);
  return weatherCodeText[numeric] || "Prognoza";
}

function firstNumber(...values) {
  for (const value of values) {
    const number = numberOrNull(value);
    if (Number.isFinite(number)) return number;
  }
  return null;
}

function numberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(String(value).replace(",", "."));
  return Number.isFinite(number) ? number : null;
}

function synopNumber(row, key) {
  return numberOrNull(row?.[key]);
}

function synopWindKph(row) {
  const value = synopNumber(row, "predkosc_wiatru");
  return Number.isFinite(value) ? value * 3.6 : null;
}

function hydroWaterTemp(row) {
  const value = numberOrNull(row?.temperatura_wody);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function directionText(degrees) {
  const value = Number(degrees);
  if (!Number.isFinite(value)) return "";
  const sectors = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return sectors[Math.round(value / 45) % 8];
}

function directionTextLong(degrees) {
  const value = Number(degrees);
  if (!Number.isFinite(value)) return "";
  return `${directionText(value)} (${Math.round(value)}°)`;
}

function formatMaybe(value, suffix) {
  const number = numberOrNull(value);
  return Number.isFinite(number) ? `${roundNumber(number)}${suffix}` : "brak danych";
}

function formatClock(value) {
  if (!value) return "--:--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--:--";
  return date.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });
}

function formatDuration(seconds) {
  const value = Number(seconds);
  if (!Number.isFinite(value)) return "brak danych";
  const hours = Math.floor(value / 3600);
  const minutes = Math.round((value % 3600) / 60);
  return `${hours}h ${String(minutes).padStart(2, "0")}min`;
}

function formatVisibility(meters) {
  const value = Number(meters);
  if (!Number.isFinite(value)) return "brak danych";
  return value >= 1000 ? `${roundNumber(value / 1000)} km` : `${Math.round(value)} m`;
}

function pressureTrendText(periods) {
  if (!Array.isArray(periods) || periods.length < 4) return "Trend ciśnienia: brak danych";
  const start = numberOrNull(periods[0]?.pressure);
  const next = numberOrNull(periods[3]?.pressure);
  if (!Number.isFinite(start) || !Number.isFinite(next)) return "Trend ciśnienia: brak danych";
  const diff = Math.round((next - start) * 10) / 10;
  if (Math.abs(diff) < 0.8) return "Ciśnienie stabilne";
  return diff > 0 ? `Ciśnienie rośnie o ${diff} hPa / 3h` : `Ciśnienie spada o ${Math.abs(diff)} hPa / 3h`;
}

function moonPhaseInfo(date) {
  const synodicMonth = 29.530588853;
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14);
  const noon = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12);
  const age = (((noon - knownNewMoon) / 86400000) % synodicMonth + synodicMonth) % synodicMonth;
  const illumination = Math.round(((1 - Math.cos((age / synodicMonth) * 2 * Math.PI)) / 2) * 100);
  const phases = [
    [1.84566, "Nów"],
    [5.53699, "Przybywający sierp"],
    [9.22831, "I kwadra"],
    [12.91963, "Przybywający garb"],
    [16.61096, "Pełnia"],
    [20.30228, "Ubywający garb"],
    [23.99361, "III kwadra"],
    [27.68493, "Ubywający sierp"],
    [synodicMonth, "Nów"],
  ];
  return {
    age,
    illumination,
    name: phases.find(([limit]) => age < limit)?.[1] || "Nów",
  };
}

function photoCountLabel(count) {
  if (count === 1) return "1 zdjęcie";
  if (count > 1 && count < 5) return `${count} zdjęcia`;
  return `${count} zdjęć`;
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${roundNumber(bytes / 1024 / 1024)} MB`;
}

function roundNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return value;
  return Math.round(number * 10) / 10;
}

function roundCoord(value) {
  return Math.round(Number(value) * 10000) / 10000;
}

function scoreColor(score) {
  if (score >= 82) return "var(--water)";
  if (score >= 66) return "var(--reed)";
  if (score >= 48) return "var(--sun)";
  return "var(--rose)";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ąĄ]/g, "a")
    .replace(/[ćĆ]/g, "c")
    .replace(/[ęĘ]/g, "e")
    .replace(/[łŁ]/g, "l")
    .replace(/[ńŃ]/g, "n")
    .replace(/[óÓ]/g, "o")
    .replace(/[śŚ]/g, "s")
    .replace(/[źŹżŻ]/g, "z")
    .toLowerCase()
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

window.fishingApp = {
  loadWeather,
  selectSpot,
};

try {
  init();
} catch (error) {
  console.error(error);
  showBootError(error);
}
