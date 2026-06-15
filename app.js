const STORAGE_KEY = "fishing-weather-poland-v2";

const imgwStations = [
  { name: "Bialystok", lat: 53.1325, lon: 23.1688 },
  { name: "Bielsko Biala", lat: 49.8224, lon: 19.0449 },
  { name: "Chojnice", lat: 53.6955, lon: 17.557 },
  { name: "Czestochowa", lat: 50.8118, lon: 19.1203 },
  { name: "Elblag", lat: 54.1522, lon: 19.4088 },
  { name: "Gdansk", lat: 54.352, lon: 18.6466 },
  { name: "Gorzow", lat: 52.7368, lon: 15.2288 },
  { name: "Hel", lat: 54.6081, lon: 18.8013 },
  { name: "Jelenia Gora", lat: 50.9044, lon: 15.7194 },
  { name: "Kalisz", lat: 51.7611, lon: 18.091 },
  { name: "Katowice", lat: 50.2649, lon: 19.0238 },
  { name: "Ketrzyn", lat: 54.0768, lon: 21.3753 },
  { name: "Kielce", lat: 50.8661, lon: 20.6286 },
  { name: "Klodzko", lat: 50.4349, lon: 16.6615 },
  { name: "Kolobrzeg", lat: 54.1769, lon: 15.5764 },
  { name: "Koszalin", lat: 54.1944, lon: 16.1722 },
  { name: "Kozienice", lat: 51.5829, lon: 21.5668 },
  { name: "Krakow", lat: 50.0647, lon: 19.945 },
  { name: "Krosno", lat: 49.6887, lon: 21.7706 },
  { name: "Legnica", lat: 51.207, lon: 16.1553 },
  { name: "Lesko", lat: 49.47, lon: 22.33 },
  { name: "Leszno", lat: 51.8403, lon: 16.5749 },
  { name: "Lebork", lat: 54.5392, lon: 17.7501 },
  { name: "Lublin", lat: 51.2465, lon: 22.5684 },
  { name: "Leba", lat: 54.7601, lon: 17.5569 },
  { name: "Lodz", lat: 51.7592, lon: 19.455 },
  { name: "Mikolajki", lat: 53.8029, lon: 21.5701 },
  { name: "Mlawa", lat: 53.1128, lon: 20.3841 },
  { name: "Nowy Sacz", lat: 49.6218, lon: 20.6971 },
  { name: "Olsztyn", lat: 53.7784, lon: 20.4801 },
  { name: "Opole", lat: 50.6751, lon: 17.9213 },
  { name: "Ostroleka", lat: 53.0833, lon: 21.5667 },
  { name: "Pila", lat: 53.1515, lon: 16.7382 },
  { name: "Plock", lat: 52.5468, lon: 19.7064 },
  { name: "Poznan", lat: 52.4064, lon: 16.9252 },
  { name: "Przemysl", lat: 49.7839, lon: 22.7678 },
  { name: "Raciborz", lat: 50.0915, lon: 18.2193 },
  { name: "Resko", lat: 53.7721, lon: 15.4066 },
  { name: "Rzeszow", lat: 50.0412, lon: 21.9991 },
  { name: "Sandomierz", lat: 50.6827, lon: 21.749 },
  { name: "Siedlce", lat: 52.1677, lon: 22.2901 },
  { name: "Slubice", lat: 52.3509, lon: 14.5606 },
  { name: "Sulejow", lat: 51.3544, lon: 19.8855 },
  { name: "Suwalki", lat: 54.1115, lon: 22.9308 },
  { name: "Szczecin", lat: 53.4285, lon: 14.5528 },
  { name: "Szczecinek", lat: 53.7079, lon: 16.6994 },
  { name: "Swinoujscie", lat: 53.9105, lon: 14.2471 },
  { name: "Tarnow", lat: 50.0121, lon: 20.9858 },
  { name: "Terespol", lat: 52.0756, lon: 23.6161 },
  { name: "Torun", lat: 53.0138, lon: 18.5984 },
  { name: "Ustka", lat: 54.5805, lon: 16.8619 },
  { name: "Warszawa", lat: 52.2297, lon: 21.0122 },
  { name: "Wielun", lat: 51.2209, lon: 18.5696 },
  { name: "Wlodawa", lat: 51.55, lon: 23.55 },
  { name: "Wroclaw", lat: 51.1079, lon: 17.0385 },
  { name: "Zakopane", lat: 49.2992, lon: 19.9496 },
  { name: "Zamosc", lat: 50.7231, lon: 23.251 },
  { name: "Zielona Gora", lat: 51.9356, lon: 15.5062 },
];

const presets = [
  {
    name: "Malina - Opole",
    lat: 50.6319,
    lon: 17.9886,
    station: "Opole",
    type: "Jezioro",
    species: "karp, amur, lin, szczupak, okon",
  },
  {
    name: "Jezioro Turawskie",
    lat: 50.7266,
    lon: 18.1195,
    station: "Opole",
    type: "Jezioro",
    species: "sandacz, szczupak, okon, leszcz",
  },
  {
    name: "Mazury - Mikolajki",
    lat: 53.8029,
    lon: 21.5701,
    station: "Mikolajki",
    type: "Jezioro",
    species: "szczupak, okon, sandacz, wegorz",
  },
  {
    name: "Zalew Zegrzynski",
    lat: 52.4722,
    lon: 21.0483,
    station: "Warszawa",
    type: "Zalew",
    species: "sandacz, sum, leszcz, okon",
  },
  {
    name: "Wisla - Warszawa",
    lat: 52.2477,
    lon: 21.0122,
    station: "Warszawa",
    type: "Rzeka",
    species: "bolen, sandacz, sum, brzana",
  },
  {
    name: "Odra - Wroclaw",
    lat: 51.1079,
    lon: 17.0385,
    station: "Wroclaw",
    type: "Rzeka",
    species: "klen, sandacz, sum, leszcz",
  },
  {
    name: "Jezioro Solinskie",
    lat: 49.3953,
    lon: 22.4515,
    station: "Lesko",
    type: "Jezioro",
    species: "sandacz, szczupak, okon, pstrag",
  },
  {
    name: "Zatoka Gdanska - Hel",
    lat: 54.6081,
    lon: 18.8013,
    station: "Hel",
    type: "Morze",
    species: "belona, dorsz, fladra, okoń morski",
  },
  {
    name: "Jezioro Dabie - Szczecin",
    lat: 53.4246,
    lon: 14.6337,
    station: "Szczecin",
    type: "Jezioro",
    species: "sandacz, szczupak, okon",
  },
];

const weatherCodeText = {
  0: "Bezchmurnie",
  1: "Przewaznie slonecznie",
  2: "Czesciowe zachmurzenie",
  3: "Pochmurno",
  45: "Mgla",
  48: "Mgla osadzajaca szadz",
  51: "Slaba mzawka",
  53: "Mzawka",
  55: "Silna mzawka",
  56: "Marznaca mzawka",
  57: "Silna marznaca mzawka",
  61: "Slaby deszcz",
  63: "Deszcz",
  65: "Silny deszcz",
  66: "Marznacy deszcz",
  67: "Silny marznacy deszcz",
  71: "Slaby snieg",
  73: "Snieg",
  75: "Silny snieg",
  77: "Ziarnisty snieg",
  80: "Przelotny deszcz",
  81: "Przelotny deszcz",
  82: "Silna ulewa",
  85: "Przelotny snieg",
  86: "Silny przelotny snieg",
  95: "Burza",
  96: "Burza z gradem",
  99: "Silna burza z gradem",
};

const state = {
  selected: { ...presets[0] },
  spots: [],
  photos: [],
  weather: null,
  water: null,
  map: null,
  currentMarker: null,
  spotLayer: null,
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
  scoreRing: document.querySelector("#scoreRing"),
  scoreValue: document.querySelector("#scoreValue"),
  statusLine: document.querySelector("#statusLine"),
  adviceBox: document.querySelector("#adviceBox"),
  metricGrid: document.querySelector("#metricGrid"),
  detailGrid: document.querySelector("#detailGrid"),
  assistantSummary: document.querySelector("#assistantSummary"),
  assistantForm: document.querySelector("#assistantForm"),
  assistantQuestion: document.querySelector("#assistantQuestion"),
  assistantAnswer: document.querySelector("#assistantAnswer"),
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
  photoForm: document.querySelector("#photoForm"),
  fileDrop: document.querySelector("#fileDrop"),
  photoInput: document.querySelector("#photoInput"),
  photoDropTitle: document.querySelector("#photoDropTitle"),
  photoDropMeta: document.querySelector("#photoDropMeta"),
  photoSpotSelect: document.querySelector("#photoSpotSelect"),
  photoSpeciesInput: document.querySelector("#photoSpeciesInput"),
  photoDateInput: document.querySelector("#photoDateInput"),
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
  renderAlbum();
  renderWater(null);
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
  const message = error?.message ? ` Blad: ${error.message}` : "";
  bootWarning.innerHTML = `<strong>Aplikacja nie wystartowala.</strong><span>Najczesciej oznacza to, ze na GitHubie jest stary albo niepodmieniony plik app.js.${escapeHtml(message)}</span>`;
}

function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    state.spots = Array.isArray(saved.spots) ? saved.spots : [];
    state.photos = Array.isArray(saved.photos) ? saved.photos : [];
    if (Number.isFinite(Number(saved.selected?.lat)) && Number.isFinite(Number(saved.selected?.lon))) {
      state.selected = saved.selected;
    }
  } catch (error) {
    console.warn("Nie udalo sie wczytac zapisu", error);
  }
}

function saveStorage() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      selected: state.selected,
      spots: state.spots,
      photos: state.photos,
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
  dom.assistantForm?.addEventListener("submit", handleAssistantSubmit);
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
  setPhotoStatus(`Wybrano ${photoCountLabel(files.length)}. Kliknij „Zapisz zdjecia”.`, "working");
}

function resetPhotoPicker() {
  dom.fileDrop?.classList.remove("has-files");
  if (dom.photoDropTitle) dom.photoDropTitle.textContent = "Dodaj zdjecia";
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
    setStatus("Wpisz poprawne wspolrzedne.", "warn");
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
}

async function locateUser() {
  if (!navigator.geolocation) {
    setStatus("Ta przegladarka nie udostepnia lokalizacji.", "warn");
    return;
  }
  setStatus("Czekam na lokalizacje z przegladarki...");
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
    () => setStatus("Nie udalo sie pobrac lokalizacji.", "warn"),
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

async function loadWeather() {
  const location = readInputs();
  if (!Number.isFinite(location.lat) || !Number.isFinite(location.lon)) {
    setStatus("Wpisz poprawne wspolrzedne.", "warn");
    return;
  }

  selectLocation(location);
  setLoading(true);
  setStatus("Pobieram prognoze i dane IMGW...");

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
    .slice(0, 24);
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
    ["Wilgotnosc", formatMaybe(now.relativeHumidity, "%")],
    ["Cisnienie", formatMaybe(now.pressure, "hPa")],
    ["Temp. wody", formatMaybe(waterTemp, "°C")],
  ]);
  renderFishingDetails(now, state.weather.daily, state.weather.hourly, waterTemp);
  renderAssistantSummary(score, now, state.weather.daily, state.weather.hourly, waterTemp);
  renderHourly(state.weather.hourly.slice(0, 12), waterTemp);
}

function renderWeatherError(error) {
  setScore(null);
  dom.adviceBox.textContent =
    "Nie udalo sie pobrac prognozy. Sprawdz internet albo sprobuj ponownie za chwile.";
  dom.metricGrid.innerHTML = "";
  dom.detailGrid.innerHTML = "";
  if (dom.assistantSummary) {
    dom.assistantSummary.textContent = "Asystent potrzebuje aktualnej pogody. Pobierz dane jeszcze raz.";
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

function answerAssistant(question) {
  if (!dom.assistantAnswer) return;
  if (!state.weather?.current || !state.weather?.hourly?.length) {
    dom.assistantAnswer.textContent = "Najpierw pobierz pogode dla lowiska. Wtedy odpowiem na bazie aktualnych danych.";
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
  dom.assistantAnswer.textContent = buildFishingAdvice(
    question,
    score,
    now,
    state.weather.daily,
    state.weather.hourly,
    waterTemp
  );
}

function buildFishingAdvice(question, score, now, daily, hourly, waterTemp) {
  const text = normalize(question || "");
  const windows = bestFishingWindows(hourly, waterTemp, 3);
  const places = placeAdvice(now);
  const lures = lureAdvice(now, waterTemp);
  const fish = fishAdvice(now, waterTemp);
  const wind = `${formatMaybe(now.windSpeed, "km/h")} ${directionTextLong(now.windDirection)}`.trim();
  const moon = moonPhaseInfo(new Date(now.startTime || Date.now()));
  const windowsText = windows.length
    ? windows.map((item) => `${item.time} (${item.score}/100)`).join(", ")
    : "brak mocnego okna w najblizszych godzinach";

  if (/kiedy|godzin|pora|czas|okno/.test(text)) {
    return `Najlepsze najblizsze okna: ${windowsText}. Przy obecnych danych najpierw sprawdzalbym swit/zmierzch oraz godziny z lekkim wiatrem i stabilnym cisnieniem.`;
  }
  if (/gdzie|miejsce|brzeg|szukac|łowisko|lowisko/.test(text)) {
    return `Szukaj przede wszystkim: ${places}. Przy wietrze ${wind || "brak danych"} zacznij od brzegu, na ktory spycha pokarm, zatok, trzcin i przejsc glebszej wody w plytsza.`;
  }
  if (/na co|przynet|lowic|łowić|ryb|gatunek|zestaw/.test(text)) {
    return `Celowalbym w: ${fish}. Przynety/zestaw: ${lures}. Prowadz wolniej, jesli wiatr albo cisnienie sa trudne; szybciej oblawiaj aktywne ryby, jesli indeks jest wysoki.`;
  }
  if (/wiatr|kierunek|poryw/.test(text)) {
    return `Wiatr teraz: ${wind || "brak danych"}, porywy ${formatMaybe(now.windGust, "km/h")}. W praktyce oblawiaj nawietrzny brzeg, cofki, doplywy i miejsca, gdzie fala miesza wode.`;
  }
  if (/ksiezyc|księżyc|slonce|słońce|uv|zmierzch|swit/.test(text)) {
    return `Slonce: ${formatClock(daily?.sunrise)}-${formatClock(daily?.sunset)}, dzien ${formatDuration(daily?.daylightDuration)}. Ksiezyc: ${moon.name}, ok. ${moon.illumination}% oswietlenia. Najciekawsze beda okolice switu i zmierzchu.`;
  }

  return `Podsumowanie asystenta: warunki ${score.value}/100. Najlepsze okna: ${windowsText}. Gdzie: ${places}. Na co: ${fish}. Przynety: ${lures}. Wiatr ${wind || "brak danych"}, cisnienie ${formatMaybe(now.pressure, "hPa")}.`;
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
    return "zatoki osloniete od mocnej fali, cofki, przesmyki i miejsca za trzcinami";
  }
  if (Number.isFinite(rain) && rain > 55) {
    return "doplywy, splywy deszczowki, ciemniejsze pasy wody i granice metnej wody";
  }
  return "spady, blaty przy roslinnosci, trzcinowiska, pomosty, doplywy i przejscia plytko-gleboko";
}

function fishAdvice(now, waterTemp) {
  const temp = firstNumber(waterTemp, now.temperature);
  const wind = numberOrNull(now.windSpeed);
  if (Number.isFinite(temp) && temp < 8) return "okon, sandacz i szczupak w wolniejszym prowadzeniu";
  if (Number.isFinite(temp) && temp > 20) return "karp, amur, lin rano/wieczorem oraz drapieznik przy cieniu i tlenie";
  if (Number.isFinite(wind) && wind >= 8 && wind <= 22) return "szczupak, okon, sandacz oraz biala ryba przy lekkiej fali";
  return "okon, szczupak, sandacz, leszcz albo karp - zależnie od lowiska";
}

function lureAdvice(now, waterTemp) {
  const wind = numberOrNull(now.windSpeed);
  const rain = numberOrNull(now.precipitationProbability);
  const temp = firstNumber(waterTemp, now.temperature);
  if (Number.isFinite(temp) && temp > 20) return "kukurydza, pellet, method feeder, robak; na drapieznika guma przy dnie albo wobler o zmierzchu";
  if (Number.isFinite(wind) && wind > 24) return "ciezsza guma, obrotowka/wahadlowka, feeder z ciezszym koszykiem albo zestaw przy dnie";
  if (Number.isFinite(rain) && rain > 55) return "zapachowe przynety, feeder, robaki, gumy w naturalnych kolorach przy doplywach";
  return "gumy 5-9 cm, obrotowki, wobler przy roslinnosci, feeder lub method przy spokojniejszych miejscach";
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
      '<div class="empty-state">Tu pojawia sie najblizsza stacja IMGW i najblizszy wodowskaz dla wybranego lowiska.</div>';
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
    ["Stan wody", hydro ? `${formatMaybe(numberOrNull(hydro.stan_wody), "cm")} · przeplyw ${formatMaybe(numberOrNull(hydro.przeplyw), "m³/s")}` : "brak danych"],
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
      reasons.push("temperatura jest wymagajaca");
    } else score -= 5;
  }

  if (Number.isFinite(windKph)) {
    if (windKph >= 6 && windKph <= 22) score += 12;
    else if (windKph > 38) {
      score -= 24;
      reasons.push("wiatr moze utrudnic lowienie");
    } else if (windKph < 3) {
      score -= 6;
      reasons.push("cisza moze oslabic brania przy czystej wodzie");
    } else score -= 8;
  }

  if (Number.isFinite(precipProbability)) {
    if (precipProbability > 0 && precipProbability <= 35) score += 4;
    if (precipProbability > 65) {
      score -= 15;
      reasons.push("duze ryzyko opadow");
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
      reasons.push("cisnienie jest poza komfortowym zakresem");
    }
  }

  if (Number.isFinite(waterTemp)) {
    if (waterTemp >= 8 && waterTemp <= 22) score += 6;
    else if (waterTemp < 4 || waterTemp > 27) {
      score -= 8;
      reasons.push("temperatura wody moze spowalniac ryby");
    }
  }

  if (/burza|thunder|storm|grad|hail/.test(text)) {
    score -= 35;
    reasons.push("burze oznaczaja przerwe dla bezpieczenstwa");
  }
  if (/mgla|fog|mist/.test(text)) score -= 6;
  if (/snieg|lod|freezing|snow|ice/.test(text)) score -= 12;

  score = clamp(Math.round(score), 5, 98);
  const label = score >= 82 ? "bardzo dobre" : score >= 66 ? "dobre" : score >= 48 ? "srednie" : "trudne";
  const advice =
    reasons.length > 0
      ? `Warunki: ${label}. Uwaga: ${reasons.slice(0, 2).join(", ")}.`
      : `Warunki: ${label}. Szukaj ryby przy spadach, trzcinach, doplywach i miejscach z lekkim ruchem wody.`;
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
  dom.loadWeatherButton.querySelector("span").textContent = isLoading ? "Pobieram..." : "Pobierz pogode";
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
    <div>IMGW: ${escapeHtml(state.selected.station || "najblizsza stacja")}</div>
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

function renderSpots() {
  syncPhotoSpotSelect();
  if (!state.spots.length) {
    dom.spotList.innerHTML = '<div class="empty-state">Kliknij mape i zapisz pierwsze lowisko.</div>';
    return;
  }
  dom.spotList.innerHTML = state.spots
    .map(
      (spot) => `
        <article class="spot-item">
          <div>
            <strong>${escapeHtml(spot.name)}</strong>
            <div class="spot-meta">
              ${escapeHtml(spot.type)} · ${escapeHtml(spot.species || "bez gatunkow")}<br />
              ${spot.lat}, ${spot.lon}${spot.station ? ` · IMGW ${escapeHtml(spot.station)}` : ""}
            </div>
          </div>
          <div class="spot-buttons">
            <button class="tiny-button" type="button" title="Wybierz" data-spot-action="select" data-id="${spot.id}">
              <i data-lucide="navigation"></i>
            </button>
            <button class="tiny-button" type="button" title="Usun" data-spot-action="delete" data-id="${spot.id}">
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
  saveStorage();
  renderSpots();
  renderSpotMarkers();
  renderAlbum();
}

async function handlePhotoSubmit(event) {
  event.preventDefault();
  const files = Array.from(dom.photoInput.files || []);
  if (!files.length) {
    setPhotoStatus("Najpierw wybierz zdjecie albo kilka zdjec.", "warn");
    setStatus("Wybierz przynajmniej jedno zdjecie.", "warn");
    return;
  }

  setStatus("Kompresuje i zapisuje zdjecia lokalnie...");
  setPhotoStatus(`Przygotowuje ${photoCountLabel(files.length)} do zapisu...`, "working");
  try {
    const newPhotos = [];
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      setPhotoStatus(`Zapisuje ${index + 1}/${files.length}: ${file.name}`, "working");
      const dataUrl = await resizeImage(file, 1400, 0.82);
      newPhotos.push({
        id: crypto.randomUUID(),
        src: dataUrl,
        name: file.name,
        spotId: dom.photoSpotSelect.value,
        species: dom.photoSpeciesInput.value.trim(),
        date: dom.photoDateInput.value || new Date().toISOString().slice(0, 10),
        note: dom.photoNoteInput.value.trim(),
        createdAt: new Date().toISOString(),
      });
    }
    state.photos = [...newPhotos, ...state.photos];
    saveStorage();
    dom.photoForm.reset();
    resetPhotoPicker();
    dom.photoDateInput.valueAsDate = new Date();
    renderAlbum();
    setPhotoStatus(`Zapisano ${photoCountLabel(newPhotos.length)} w albumie.`, "success");
    setStatus(`Dodano zdjecia: ${newPhotos.length}.`);
  } catch (error) {
    console.error(error);
    setPhotoStatus("Nie udalo sie zapisac zdjec. Sprobuj mniejszy plik albo mniej zdjec naraz.", "warn");
    setStatus("Nie udalo sie zapisac zdjec. Mozliwe, ze pamiec przegladarki jest pelna.", "warn");
  }
}

function renderAlbum() {
  if (!state.photos.length) {
    dom.albumGrid.innerHTML = '<div class="empty-state">Album jest pusty.</div>';
    return;
  }
  dom.albumGrid.innerHTML = state.photos
    .map((photo) => {
      const spot = state.spots.find((item) => item.id === photo.spotId);
      return `
        <article class="photo-card">
          <img src="${photo.src}" alt="${escapeHtml(photo.species || photo.name || "Zdjecie z wyprawy")}" loading="lazy" />
          <div class="photo-card-body">
            <strong>${escapeHtml(photo.species || "Zdjecie z wyprawy")}</strong>
            <small>${escapeHtml(photo.date || "")}${spot ? ` · ${escapeHtml(spot.name)}` : ""}</small>
            <span>${escapeHtml(photo.note || photo.name || "")}</span>
            <div class="photo-card-actions">
              <button class="tiny-button" type="button" title="Usun zdjecie" data-photo-id="${photo.id}">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  dom.albumGrid.querySelectorAll("[data-photo-id]").forEach((button) => {
    button.addEventListener("click", () => deletePhoto(button.dataset.photoId));
  });
  if (window.lucide) window.lucide.createIcons();
}

function deletePhoto(id) {
  state.photos = state.photos.filter((photo) => photo.id !== id);
  saveStorage();
  renderAlbum();
}

function clearAlbum() {
  if (!state.photos.length) return;
  const confirmed = confirm("Usunac wszystkie zdjecia z lokalnego albumu?");
  if (!confirmed) return;
  state.photos = [];
  saveStorage();
  renderAlbum();
}

function syncPhotoSpotSelect() {
  const currentValue = dom.photoSpotSelect.value;
  dom.photoSpotSelect.innerHTML =
    '<option value="">Bez przypisania</option>' +
    state.spots
      .map((spot) => `<option value="${spot.id}">${escapeHtml(spot.name)}</option>`)
      .join("");
  dom.photoSpotSelect.value = currentValue;
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
          version: 2,
          selected: state.selected,
          spots: state.spots,
          photos: state.photos,
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
    if (Number.isFinite(Number(data.selected?.lat)) && Number.isFinite(Number(data.selected?.lon))) {
      state.selected = data.selected;
      hydrateInputs();
      updateCurrentMarker();
    }
    saveStorage();
    renderSpots();
    renderSpotMarkers();
    renderAlbum();
    setStatus("Import zakonczony.");
    closeDrawer();
  } catch (error) {
    console.error(error);
    setStatus("Nie udalo sie zaimportowac pliku JSON.", "warn");
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
  if (count === 1) return "1 zdjecie";
  if (count > 1 && count < 5) return `${count} zdjecia`;
  return `${count} zdjec`;
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
