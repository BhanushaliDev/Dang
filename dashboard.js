const D = {
  study: { title:"Dang District Organic Warehouse Network", district:"Dang District, Gujarat", center:[20.78,73.63], zoom:11 },
  talukas: {
    Ahwa:   { clusters:27, share:62.8, color:"#2563a6", farmers:6947, procurement_mt:3002 },
    Waghai: { clusters:12, share:27.9, color:"#1a7a44", farmers:3740, procurement_mt:1837 },
    Subir:  { clusters:4,  share:9.3,  color:"#b56a0e", farmers:876,  procurement_mt:387  }
  },
  candidate_nodes: [
    {id:1,  name:"Ahwa",           taluka:"Ahwa",   lat:20.758329, lng:73.680820, frm:7.9755, viable:true,  sel:false},
    {id:2,  name:"Samgahan",       taluka:"Ahwa",   lat:20.619763, lng:73.710532, frm:7.9710, viable:true,  sel:false},
    {id:3,  name:"Pimpari",        taluka:"Ahwa",   lat:20.801313, lng:73.605888, frm:7.7840, viable:true,  sel:false},
    {id:4,  name:"Mahalpada",      taluka:"Ahwa",   lat:20.767495, lng:73.745615, frm:7.3138, viable:true,  sel:true },
    {id:5,  name:"Jakhana",        taluka:"Ahwa",   lat:20.631809, lng:73.721300, frm:7.1366, viable:true,  sel:false},
    {id:6,  name:"Chikatiya",      taluka:"Ahwa",   lat:20.805225, lng:73.579131, frm:7.0837, viable:true,  sel:false},
    {id:7,  name:"Dhavlidod",      taluka:"Ahwa",   lat:20.810829, lng:73.751810, frm:7.0324, viable:true,  sel:false},
    {id:8,  name:"Chankhal",       taluka:"Ahwa",   lat:20.802306, lng:73.670901, frm:7.0095, viable:true,  sel:false},
    {id:9,  name:"Borkhal",        taluka:"Ahwa",   lat:20.717220, lng:73.711320, frm:6.9660, viable:true,  sel:false},
    {id:10, name:"Ghoghli",        taluka:"Ahwa",   lat:20.759020, lng:73.654150, frm:6.9478, viable:true,  sel:false},
    {id:11, name:"Baripada",       taluka:"Ahwa",   lat:20.643780, lng:73.677915, frm:6.9189, viable:true,  sel:false},
    {id:12, name:"Bhavandagad",    taluka:"Ahwa",   lat:20.782019, lng:73.600705, frm:6.7340, viable:true,  sel:false},
    {id:13, name:"Morzira",        taluka:"Ahwa",   lat:20.741249, lng:73.818160, frm:6.6791, viable:true,  sel:false},
    {id:14, name:"Gotyamal",       taluka:"Ahwa",   lat:20.597575, lng:73.709620, frm:6.5483, viable:true,  sel:false},
    {id:15, name:"Chaukiya",       taluka:"Ahwa",   lat:20.751139, lng:73.750970, frm:6.5068, viable:true,  sel:false},
    {id:16, name:"Gondalvihir",    taluka:"Ahwa",   lat:20.785219, lng:73.709075, frm:6.4802, viable:true,  sel:false},
    {id:17, name:"Taklipada",      taluka:"Ahwa",   lat:20.801730, lng:73.828665, frm:6.4647, viable:true,  sel:false},
    {id:18, name:"Diwantembrun",   taluka:"Ahwa",   lat:20.862060, lng:73.569598, frm:6.4551, viable:true,  sel:false},
    {id:19, name:"Lahancharya",    taluka:"Ahwa",   lat:20.657515, lng:73.756340, frm:6.2890, viable:true,  sel:false},
    {id:20, name:"Godadia",        taluka:"Ahwa",   lat:20.896170, lng:73.515140, frm:6.2649, viable:true,  sel:false},
    {id:21, name:"Malegaon",       taluka:"Ahwa",   lat:20.592456, lng:73.738974, frm:6.2648, viable:true,  sel:false},
    {id:22, name:"Dokpatal",       taluka:"Ahwa",   lat:20.720955, lng:73.492075, frm:6.2626, viable:true,  sel:false},
    {id:23, name:"Gadhvi",         taluka:"Ahwa",   lat:20.852181, lng:73.652130, frm:6.2291, viable:true,  sel:false},
    {id:24, name:"Linga",          taluka:"Ahwa",   lat:20.708212, lng:73.684923, frm:6.2161, viable:true,  sel:false},
    {id:25, name:"Don",            taluka:"Ahwa",   lat:20.712824, lng:73.832725, frm:6.0405, viable:true,  sel:false},
    {id:26, name:"Chinchli",       taluka:"Ahwa",   lat:20.736420, lng:73.901610, frm:6.0304, viable:true,  sel:false},
    {id:27, name:"Kosimada",       taluka:"Ahwa",   lat:20.996994, lng:73.559250, frm:5.9108, viable:false, sel:false},
    {id:28, name:"Waghai",         taluka:"Waghai", lat:20.773833, lng:73.496691, frm:7.3804, viable:true,  sel:false},
    {id:29, name:"Dungarda",       taluka:"Waghai", lat:20.792411, lng:73.486111, frm:7.3320, viable:true,  sel:false},
    {id:30, name:"Kalibel",        taluka:"Waghai", lat:20.928849, lng:73.560785, frm:7.2315, viable:true,  sel:false},
    {id:31, name:"Chikar",         taluka:"Waghai", lat:20.831237, lng:73.502177, frm:6.9757, viable:true,  sel:true },
    {id:32, name:"Chichinagaotha", taluka:"Waghai", lat:20.804969, lng:73.533045, frm:6.9129, viable:true,  sel:false},
    {id:33, name:"Bhalkhet",       taluka:"Waghai", lat:20.918550, lng:73.592825, frm:6.8721, viable:true,  sel:false},
    {id:34, name:"Bhenskatri",     taluka:"Waghai", lat:20.939174, lng:73.538284, frm:6.6093, viable:true,  sel:false},
    {id:35, name:"Khatal",         taluka:"Waghai", lat:20.885078, lng:73.609611, frm:6.4435, viable:true,  sel:false},
    {id:36, name:"Barkhandhia",    taluka:"Waghai", lat:20.696581, lng:73.500452, frm:6.1337, viable:true,  sel:false},
    {id:37, name:"Keshbandh",      taluka:"Waghai", lat:21.009041, lng:73.822360, frm:5.9053, viable:false, sel:false},
    {id:38, name:"Galkund",        taluka:"Waghai", lat:20.646685, lng:73.781665, frm:5.8525, viable:false, sel:false},
    {id:39, name:"Bardipada",      taluka:"Waghai", lat:20.889671, lng:73.867596, frm:5.5849, viable:false, sel:false},
    {id:40, name:"Harpada",        taluka:"Waghai", lat:20.800144, lng:73.879536, frm:5.2775, viable:false, sel:false},
    {id:41, name:"Kadmal",         taluka:"Waghai", lat:20.923692, lng:73.741218, frm:5.2632, viable:false, sel:false},
    {id:42, name:"Subir",          taluka:"Subir",  lat:20.931547, lng:73.775750, frm:6.4370, viable:true,  sel:true },
    {id:43, name:"Wasurna",        taluka:"Subir",  lat:20.695404, lng:73.660380, frm:4.9124, viable:false, sel:false},
    {id:44, name:"Kakshala",       taluka:"Subir",  lat:21.036500, lng:73.789000, frm:4.2497, viable:false, sel:false}
  ],
  ahp_cats: [
    {name:"Infrastructure",    weight:0.412, color:"#1a5da6"},
    {name:"Market",            weight:0.265, color:"#1a7a44"},
    {name:"Cost",              weight:0.148, color:"#b56a0e"},
    {name:"Labour",            weight:0.115, color:"#7b3fa0"},
    {name:"Macro-Environment", weight:0.060, color:"#0f6e56"}
  ],
  ahp_criteria: [
    {rank:1, code:"M1",  name:"Proximity to ICS Farmer Clusters",    cat:"Market",        global_wt:0.1842, local_wt:0.6951},
    {rank:2, code:"I2",  name:"Road & Transport Connectivity",        cat:"Infrastructure",global_wt:0.1585, local_wt:0.3847},
    {rank:3, code:"I4",  name:"Electricity, Water & Basic Utilities", cat:"Infrastructure",global_wt:0.1114, local_wt:0.2704},
    {rank:4, code:"C2",  name:"Distribution / Transportation Cost",   cat:"Cost",          global_wt:0.0895, local_wt:0.6047},
    {rank:5, code:"M3",  name:"Market Size & Procurement Volume",     cat:"Market",        global_wt:0.0808, local_wt:0.3049},
    {rank:6, code:"L1",  name:"Availability of Labour Force",         cat:"Labour",        global_wt:0.0751, local_wt:0.6530},
    {rank:7, code:"G5",  name:"NPOP Organic Certification Compliance",cat:"Macro-Env.",    global_wt:0.0600, local_wt:1.0000},
    {rank:8, code:"I3",  name:"Proximity to Transport Hubs",          cat:"Infrastructure",global_wt:0.0478, local_wt:0.1160},
    {rank:9, code:"I7",  name:"Contamination Risk (Neighbourhood)",   cat:"Infrastructure",global_wt:0.0421, local_wt:0.1022},
    {rank:10,code:"L2",  name:"Skilled Labour (Grading, TRACENET)",   cat:"Labour",        global_wt:0.0399, local_wt:0.3470},
    {rank:11,code:"C4",  name:"Labour Cost",                          cat:"Cost",          global_wt:0.0382, local_wt:0.2581},
    {rank:12,code:"I5",  name:"Land Suitability & Topography",        cat:"Infrastructure",global_wt:0.0225, local_wt:0.0546},
    {rank:13,code:"C1",  name:"Establishing & Construction Cost",     cat:"Cost",          global_wt:0.0203, local_wt:0.1372},
    {rank:14,code:"I8",  name:"Security & Pilferage Risk",            cat:"Infrastructure",global_wt:0.0135, local_wt:0.0328},
    {rank:15,code:"I6",  name:"Organic Lot Segregation Feasibility",  cat:"Infrastructure",global_wt:0.0090, local_wt:0.0218},
    {rank:16,code:"I1",  name:"Building Suitability",                 cat:"Infrastructure",global_wt:0.0072, local_wt:0.0175}
  ],
  ahp_matrix: {
    labels:["Cost (C)","Labour (L)","Infrastructure (I)","Market (M)","Macro-Env. (G)"],
    values:[[1.000,1.346,0.273,0.408,2.667],[0.743,1.000,0.213,0.390,2.349],[3.659,4.694,1.000,2.289,6.041],[2.454,2.566,0.437,1.000,4.069],[0.375,0.426,0.166,0.246,1.000]],
    weights:[0.148,0.115,0.412,0.265,0.060]
  },
  sclp_scenarios: [
    {label:"A",radius_km:15,  min_warehouses:5, nodes:["Chikatiya","Kalibel","Morzira","Samgahan","Subir"],  agg_sj:35.40, avg_sj:7.08, capex:"+66.7%", is_optimal:false, color:"#b56a0e"},
    {label:"B",radius_km:17.5,min_warehouses:5, nodes:["Kalibel","Mahalpada","Pimpari","Samgahan","Subir"],  agg_sj:36.74, avg_sj:7.35, capex:"+66.7%", is_optimal:false, color:"#1a5da6",
     paradox:"At 17.5 km the unconstrained SCLP selected Bardipada (Sⱼ = 5.58) — below viability threshold. FRM cross-validation required."},
    {label:"C",radius_km:20,  min_warehouses:3, nodes:["Chikar","Mahalpada","Subir"],                        agg_sj:20.73, avg_sj:6.91, capex:"Lowest (base)", is_optimal:true, color:"#1a7a44"}
  ],
  optimal_network: [
    {name:"Mahalpada", taluka:"Ahwa",   lat:20.767495,lng:73.745615, ics:27, farmers:6947, mt:3002, share:57.4, frm:7.3138, type:"WDRA-Specification Warehouse",    note:"State highway access; central Ahwa cluster belt; grid electricity", color:"#1a5da6"},
    {name:"Chikar",    taluka:"Waghai", lat:20.831237,lng:73.502177, ics:12, farmers:3740, mt:1837, share:35.2, frm:6.9757, type:"WDRA-Specification Warehouse",    note:"Waghai-Ahwa arterial road; all-weather heavy vehicle access",       color:"#1a7a44"},
    {name:"Subir",     taluka:"Subir",  lat:20.931547,lng:73.775750, ics:4,  farmers:876,  mt:387,  share:7.4,  frm:6.4370, type:"Primary Collection Point",        note:"Only viable node in Subir taluka — non-substitutable for southern coverage", color:"#b56a0e"}
  ]
};

/* ── STATE ───────────────────────────────────────────────── */
let map, coverageCircles = [], nodeMarkers = [], labelMarkers = [], activeRadius = 20, charts = {};
let showLabels = true, showLegend = true, isFullscreen = false;

/* ── TAB NAVIGATION ─────────────────────────────────────── */
document.querySelectorAll(".nav-tab").forEach(btn => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".nav-tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    this.classList.add("active");
    document.getElementById("tab-" + this.dataset.tab).classList.add("active");
    if (this.dataset.tab === "map" && !map) initMap();
    if (this.dataset.tab === "map" && map) setTimeout(() => map.invalidateSize(), 50);
  });
});

/* ── OVERVIEW ───────────────────────────────────────────── */
function buildTalukaList() {
  const el = document.getElementById("taluka-list");
  if (!el) return;
  el.innerHTML = Object.entries(D.talukas).map(([k, t]) => `
    <div class="taluka-row">
      <div class="taluka-dot" style="background:${t.color}"></div>
      <div class="taluka-name">${k}</div>
      <div class="taluka-bar-wrap"><div class="taluka-bar" style="width:${t.share}%;background:${t.color};height:5px;border-radius:3px"></div></div>
      <div class="taluka-nums">${t.clusters} clusters · ${t.farmers.toLocaleString()} farmers · ${t.procurement_mt} MT</div>
    </div>`).join("");
}

function buildScenCards() {
  const el = document.getElementById("scen-cards");
  if (!el) return;
  el.innerHTML = D.sclp_scenarios.map(s => `
    <div class="scen-card ${s.is_optimal ? "scen-optimal" : "scen-viable"}">
      <div class="scen-title">Radius ${s.radius_km} km &nbsp; — &nbsp; ${s.min_warehouses} warehouse${s.min_warehouses !== 1 ? "s" : ""} ${s.is_optimal ? "<span class='optimal-badge'>Recommended</span>" : ""}</div>
      <div class="scen-stat">Avg FRM score: <b>${s.avg_sj.toFixed(2)}</b> &nbsp;·&nbsp; CAPEX: <b>${s.capex}</b></div>
      <div class="scen-nodes">Nodes: ${s.nodes.join(" · ")}</div>
      ${s.paradox ? `<div class="paradox-note" style="margin-top:6px">${s.paradox}</div>` : ""}
    </div>`).join("");
}

function buildChartTaluka() {
  const ctx = document.getElementById("chart-taluka");
  if (!ctx) return;
  const labels = Object.keys(D.talukas), t = D.talukas;
  if (charts.taluka) charts.taluka.destroy();
  charts.taluka = new Chart(ctx, {
    type: "bar", data: {
      labels,
      datasets: [
        { label: "ICS Clusters", data: labels.map(k => t[k].clusters), backgroundColor: labels.map(k => t[k].color), borderRadius: 4, yAxisID: "y" },
        { label: "Enrolled Farmers", data: labels.map(k => t[k].farmers), type: "line", borderColor: "#7b3fa0", backgroundColor: "transparent", pointBackgroundColor: "#7b3fa0", yAxisID: "y2", tension: 0.3 }
      ]
    }, options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: "top", labels: { font: { size: 11 }, boxWidth: 10 } } },
      scales: {
        y: { title: { display: true, text: "ICS Clusters", font: { size: 11 } }, ticks: { font: { size: 11 } } },
        y2: { title: { display: true, text: "Farmers", font: { size: 11 } }, position: "right", ticks: { font: { size: 11 } }, grid: { drawOnChartArea: false } }
      }
    }
  });
}

function buildChartAHPMain() {
  const ctx = document.getElementById("chart-ahp-main");
  if (!ctx) return;
  if (charts.ahpMain) charts.ahpMain.destroy();
  charts.ahpMain = new Chart(ctx, {
    type: "bar", data: {
      labels: D.ahp_cats.map(c => c.name),
      datasets: [{ label: "Weight", data: D.ahp_cats.map(c => c.weight), backgroundColor: D.ahp_cats.map(c => c.color), borderRadius: 4 }]
    }, options: {
      indexAxis: "y", responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => " " + ((ctx.raw) * 100).toFixed(1) + "%" } } },
      scales: { x: { beginAtZero: true, ticks: { callback: v => ((v) * 100).toFixed(0) + "%", font: { size: 11 } } }, y: { ticks: { font: { size: 11 } } } }
    }
  });
}

function buildChartCriteriaTop() {
  const ctx = document.getElementById("chart-criteria-top");
  if (!ctx) return;
  const top10 = D.ahp_criteria.slice(0, 10);
  if (charts.criteriaTop) charts.criteriaTop.destroy();
  charts.criteriaTop = new Chart(ctx, {
    type: "bar", data: {
      labels: top10.map(c => c.code),
      datasets: [{
        label: "Global weight", data: top10.map(c => c.global_wt),
        backgroundColor: top10.map(c => { const cat = D.ahp_cats.find(a => a.name === c.cat || a.name.startsWith(c.cat.split("-")[0])); return cat ? cat.color : "#888"; }),
        borderRadius: 4
      }]
    }, options: {
      indexAxis: "y", responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { title: ctx => top10[ctx[0].dataIndex].name, label: ctx => " " + ((ctx.raw) * 100).toFixed(2) + "%" } } },
      scales: { x: { beginAtZero: true, ticks: { callback: v => ((v) * 100).toFixed(0) + "%", font: { size: 11 } } }, y: { ticks: { font: { size: 11 } } } }
    }
  });
}

/* ── MAP ────────────────────────────────────────────────── */
function initMap() {
  map = L.map("map", { center: D.study.center, zoom: D.study.zoom, zoomControl: true });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors", maxZoom: 19 }).addTo(map);
  const initScen = D.sclp_scenarios.find(s => s.radius_km === activeRadius);
  renderMapNodes(initScen ? initScen.nodes : null);
  renderLabels();
  renderCoverage(activeRadius);
  updateScenInfo(activeRadius);

  // Radius buttons
  document.querySelectorAll(".radius-btn").forEach(btn => btn.addEventListener("click", function () {
    document.querySelectorAll(".radius-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    activeRadius = parseFloat(this.dataset.r);
    const scen = D.sclp_scenarios.find(s => s.radius_km === activeRadius);
    renderMapNodes(scen ? scen.nodes : null);
    renderLabels();
    renderCoverage(activeRadius);
    updateScenInfo(activeRadius);
  }));

  // Labels toggle
  document.getElementById("btn-labels").addEventListener("click", function () {
    showLabels = !showLabels;
    this.classList.toggle("active", showLabels);
    renderLabels();
  });

  // Legend toggle
  document.getElementById("btn-legend").addEventListener("click", function () {
    showLegend = !showLegend;
    this.classList.toggle("active", showLegend);
    const fl = document.getElementById("map-legend-float");
    if (fl) fl.classList.toggle("hidden", !showLegend);
  });

  // Fullscreen toggle
  document.getElementById("btn-fullscreen").addEventListener("click", function () {
    isFullscreen = !isFullscreen;
    document.body.classList.toggle("map-fullscreen", isFullscreen);
    this.classList.toggle("active", isFullscreen);
    // Update icon to exit icon when fullscreen
    this.innerHTML = isFullscreen
      ? `<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M5 1H3v2H1v2h4V1zm6 0h2v2h2v2h-4V1zM1 10h2v2h2v4H1v-4zm10 4h2v-2h2v-4h-4v6z" fill="currentColor"/></svg> Exit Fullscreen`
      : `<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M1 1h4v2H3v2H1V1zm10 0h4v4h-2V3h-2V1zM1 11h2v2h2v2H1v-4zm12 2h-2v2h4v-4h-2v2z" fill="currentColor"/></svg> Fullscreen`;
    setTimeout(() => map.invalidateSize(), 60);
  });
}

function renderMapNodes(scenNodes) {
  nodeMarkers.forEach(m => m.remove()); nodeMarkers = [];
  const activeNames = scenNodes || D.optimal_network.map(n => n.name);
  D.candidate_nodes.forEach(node => {
    const isActive = activeNames.includes(node.name);
    const fn = D.optimal_network.find(n => n.name === node.name);
    const tc = D.talukas[node.taluka]?.color || "#888";
    let icon;
    if (isActive) {
      const markerColor = fn ? fn.color : tc;
      const isCP = fn?.type === "Primary Collection Point";
      const cls = isCP ? "mk-opt-cp" : "mk-opt-wh";
      icon = L.divIcon({ className: "", html: `<div class="${cls}" style="background:${markerColor}"></div>`, iconSize: [22, 22], iconAnchor: [11, 11] });
    } else if (!node.viable) {
      icon = L.divIcon({ className: "", html: `<div class="below-marker"></div>`, iconSize: [10, 10], iconAnchor: [5, 5] });
    } else {
      icon = L.divIcon({ className: "", html: `<div class="viable-marker" style="background:${tc}"></div>`, iconSize: [10, 10], iconAnchor: [5, 5] });
    }
    const m = L.marker([node.lat, node.lng], { icon, zIndexOffset: isActive ? 1000 : node.viable ? 200 : 100 });
    m.bindPopup(`<div class="popup-head">${node.name} <span style="font-size:10px;color:#6b7a8a">· ${node.taluka}</span></div>${fn ? `
      <div class="popup-row"><span class="popup-key">Facility type</span><span class="popup-val">${fn.type}</span></div>
      <div class="popup-row"><span class="popup-key">ICS clusters</span><span class="popup-val">${fn.ics}</span></div>
      <div class="popup-row"><span class="popup-key">Enrolled farmers</span><span class="popup-val">${fn.farmers.toLocaleString()}</span></div>
      <div class="popup-row"><span class="popup-key">Procurement</span><span class="popup-val">${fn.mt} MT/yr</span></div>
      <div class="popup-row"><span class="popup-key">Network share</span><span class="popup-val">${fn.share}%</span></div>
      <div class="popup-row"><span class="popup-key">FRM score</span><span class="popup-val">${fn.frm.toFixed(4)}</span></div>
      <div class="popup-note">${fn.note}</div>` : `
      <div class="popup-row"><span class="popup-key">FRM score</span><span class="popup-val">${node.frm.toFixed(4)}</span></div>
      <div class="popup-row"><span class="popup-key">Status</span><span class="popup-val" style="color:${node.viable ? "#1a7a44" : "#c42828"}">${node.viable ? "Viable" : "Below threshold"}</span></div>
      ${isActive ? `<div class="popup-row"><span class="popup-key">Selected by</span><span class="popup-val">SCLP scenario</span></div>` : ""}
      ${node.name === "Bardipada" ? `<div class="popup-note">Spatial-infrastructure paradox: selected by SCLP at 17.5 km but rejected by FRM cross-validation — no all-weather road access.</div>` : ""}`}`, { maxWidth: 280 });
    m.addTo(map); nodeMarkers.push(m);
  });
}

function renderLabels() {
  // Remove all existing labels
  labelMarkers.forEach(m => m.remove()); labelMarkers = [];
  if (!map || !showLabels) return;

  const scen = D.sclp_scenarios.find(s => s.radius_km === activeRadius);
  const activeNames = scen ? scen.nodes : D.optimal_network.map(n => n.name);

  D.candidate_nodes.forEach(node => {
    const isActive = activeNames.includes(node.name);
    const fn = D.optimal_network.find(n => n.name === node.name);
    const isOpt = !!fn;
    const labelClass = isOpt ? "node-label-inner opt" : "node-label-inner";

    // Offset label slightly above/below the marker
    const offset = isActive ? [0, -18] : [0, -10];
    const lm = L.marker([node.lat, node.lng], {
      icon: L.divIcon({
        className: "node-label",
        html: `<div class="${labelClass}">${node.name}</div>`,
        iconSize: [80, 20],
        iconAnchor: [-2, offset[1] * -1]
      }),
      zIndexOffset: isActive ? 2000 : 500,
      interactive: false
    });
    lm.addTo(map);
    labelMarkers.push(lm);
  });
}

function renderCoverage(r) {
  coverageCircles.forEach(c => c.remove()); coverageCircles = [];
  const scen = D.sclp_scenarios.find(s => s.radius_km === r) || D.sclp_scenarios[2];
  D.candidate_nodes.filter(n => scen.nodes.includes(n.name)).forEach(node => {
    const c = L.circle([node.lat, node.lng], { radius: r * 1000, color: scen.color, fillColor: scen.color, fillOpacity: 0.06, weight: 1.5, dashArray: "5 4", opacity: 0.7 }).addTo(map);
    coverageCircles.push(c);
  });
}

function updateScenInfo(r) {
  const s = D.sclp_scenarios.find(sc => sc.radius_km === r);
  if (!s) return;
  const el = document.getElementById("scenario-info");
  if (el) el.innerHTML = `<b>Radius ${s.radius_km} km</b> &nbsp;·&nbsp; ${s.min_warehouses} warehouses &nbsp;·&nbsp; Nodes: ${s.nodes.join(", ")} &nbsp;·&nbsp; Avg S<sub>j</sub>: ${s.avg_sj.toFixed(2)} ${s.is_optimal ? "&nbsp;<span style='color:#1a7a44;font-weight:500'>✓ Recommended</span>" : ""}${s.paradox ? `<div style='margin-top:5px;color:#b56a0e'>⚠ ${s.paradox}</div>` : ""}`;
}

function buildOptimalCards() {
  const el = document.getElementById("optimal-cards");
  if (!el) return;
  el.innerHTML = D.optimal_network.map(n => `
    <div class="node-card selected">
      <span class="node-badge" style="background:${n.color}22;color:${n.color}">${n.taluka}</span>
      <div class="node-name">${n.name}</div>
      <div class="node-type">${n.type}</div>
      <div class="frm-bar-wrap">
        <div class="frm-bar-label"><span>FRM Score</span><span>${n.frm.toFixed(4)}</span></div>
        <div class="frm-bar-track"><div class="frm-bar-fill" style="width:${((n.frm - 4) / (10 - 4)) * 100}%;background:${n.color}"></div></div>
      </div>
      <div class="node-stat-row">
        <div class="node-stat"><div class="node-stat-val">${n.ics}</div><div class="node-stat-lbl">ICS clusters</div></div>
        <div class="node-stat"><div class="node-stat-val">${n.mt}</div><div class="node-stat-lbl">MT/yr</div></div>
      </div>
    </div>`).join("");
}

/* ── FRM CHART + TABLE ──────────────────────────────────── */
function buildFRMChart() {
  const ctx = document.getElementById("chart-frm-dist");
  if (!ctx) return;
  const nodes = D.candidate_nodes;
  const optNames = D.optimal_network.map(n => n.name);
  if (charts.frm) charts.frm.destroy();
  charts.frm = new Chart(ctx, {
    type: "bar", data: {
      labels: nodes.map(n => n.name),
      datasets: [{ label: "FRM Score", data: nodes.map(n => n.frm), backgroundColor: nodes.map(n => optNames.includes(n.name) ? "#1a5da6" : !n.viable ? "#c42828" : "#93b8da"), borderRadius: 2 }]
    }, options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => " Sj = " + ctx.raw.toFixed(4) + " — " + nodes[ctx.dataIndex].taluka } } },
      scales: {
        y: { min: 3.5, max: 8.5, ticks: { callback: v => v.toFixed(1), font: { size: 11 } }, grid: { color: "rgba(0,0,0,0.05)" } },
        x: { ticks: { font: { size: 9 }, maxRotation: 55, autoSkip: false } }
      }
    }
  });
  const plugin = {
    id: "tl", afterDraw(chart) {
      const { ctx: c, chartArea: ca, scales: s } = chart;
      const y = s.y.getPixelForValue(6.0);
      c.save(); c.beginPath(); c.strokeStyle = "#c42828"; c.lineWidth = 1.5; c.setLineDash([5, 3]);
      c.moveTo(ca.left, y); c.lineTo(ca.right, y); c.stroke();
      c.fillStyle = "#c42828"; c.font = "10px system-ui,sans-serif";
      c.fillText("Viability threshold  Sj = 6.0", ca.left + 4, y - 4); c.restore();
    }
  };
  charts.frm.options.plugins.customThreshold = plugin;
  Chart.register(plugin);
}

function buildFRMTable() {
  const tbl = document.getElementById("frm-table");
  if (!tbl) return;
  const optNames = D.optimal_network.map(n => n.name);
  tbl.innerHTML = `<thead><tr><th>Rank</th><th>Node</th><th>Taluka</th><th>FRM Score</th><th>Viable</th><th>SCLP Selected</th><th>Score Bar</th></tr></thead>
  <tbody>${D.candidate_nodes.map((n, i) => {
    const isOpt = optNames.includes(n.name);
    return `<tr>
      <td><span class="rank-badge ${i < 3 ? "top" : ""}">${n.id}</span></td>
      <td><b>${n.name}</b></td>
      <td>${n.taluka}</td>
      <td class="num">${n.frm.toFixed(4)}</td>
      <td><span class="tag ${n.viable ? "badge-green" : "badge-red"}">${n.viable ? "Viable" : "Below threshold"}</span></td>
      <td>${isOpt ? `<span class="tag badge-blue">Selected</span>` : ""}</td>
      <td><span class="weight-bar" style="width:${Math.max(2, ((n.frm - 3.5) / (8.5 - 3.5)) * 120)}px;background:${isOpt ? "#1a5da6" : !n.viable ? "#c42828" : "#1a7a44"}"></span></td>
    </tr>`;
  }).join("")}</tbody>`;
}

/* ── AHP MATRIX + CRITERIA TABLE ────────────────────────── */
function buildAHPMatrix() {
  const el = document.getElementById("ahp-matrix-wrap");
  if (!el) return;
  const { labels, values, weights } = D.ahp_matrix;
  el.innerHTML = `<table class="matrix-table">
    <thead><tr><th></th>${labels.map(l => `<th>${l}</th>`).join("")}<th style="background:#e6f0fb;color:#1a5da6">Weight</th></tr></thead>
    <tbody>${values.map((row, i) => `<tr>
      <td class="matrix-row-header">${labels[i]}</td>
      ${row.map((v, j) => `<td class="${i === j ? "matrix-diag" : ""}">${v.toFixed(3)}</td>`).join("")}
      <td style="background:#e6f0fb;color:#1a5da6;font-weight:500;text-align:right">${(weights[i] * 100).toFixed(1)}%</td>
    </tr>`).join("")}</tbody></table>`;
}

function buildAHPCatChart() {
  const ctx = document.getElementById("chart-ahp-cat");
  if (!ctx) return;
  if (charts.ahpCat) charts.ahpCat.destroy();
  charts.ahpCat = new Chart(ctx, {
    type: "doughnut", data: {
      labels: D.ahp_cats.map(c => c.name),
      datasets: [{ data: D.ahp_cats.map(c => c.weight), backgroundColor: D.ahp_cats.map(c => c.color), borderWidth: 2, borderColor: "#fff" }]
    }, options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: "right", labels: { font: { size: 11 }, boxWidth: 10 } }, tooltip: { callbacks: { label: ctx => " " + ctx.label + ": " + (ctx.raw * 100).toFixed(1) + "%" } } }
    }
  });
}

function buildCriteriaTable() {
  const tbl = document.getElementById("criteria-table");
  if (!tbl) return;
  const catColors = { "Market": "badge-green", "Infrastructure": "badge-blue", "Cost": "badge-amber", "Labour": "badge-red", "Macro-Env.": "badge-green" };
  tbl.innerHTML = `<thead><tr><th>Rank</th><th>Code</th><th>Criterion</th><th>Category</th><th>Local wt</th><th>Global wt</th><th>Global weight bar</th></tr></thead>
  <tbody>${D.ahp_criteria.map(c => {
    const cls = catColors[c.cat] || "badge-blue";
    return `<tr>
      <td><span class="rank-badge ${c.rank <= 3 ? "top" : ""}">${c.rank}</span></td>
      <td><code style="font-size:11px;background:var(--bg3);padding:1px 5px;border-radius:3px">${c.code}</code></td>
      <td>${c.name}</td>
      <td><span class="tag ${cls}">${c.cat}</span></td>
      <td class="num">${(c.local_wt * 100).toFixed(2)}%</td>
      <td class="num">${(c.global_wt * 100).toFixed(2)}%</td>
      <td><span class="weight-bar" style="width:${Math.max(2, (c.global_wt / 0.20) * 120)}px"></span></td>
    </tr>`;
  }).join("")}</tbody>`;
}

/* ── SCLP CHARTS ────────────────────────────────────────── */
function buildSCLPCards() {
  const el = document.getElementById("scen-full-cards");
  if (!el) return;
  el.innerHTML = D.sclp_scenarios.map(s => `
    <div class="scen-card ${s.is_optimal ? "scen-optimal" : "scen-viable"}">
      <div class="scen-title">Radius ${s.radius_km} km ${s.is_optimal ? "<span class='optimal-badge'>Recommended</span>" : ""}</div>
      <div class="scen-stat">Warehouses: <b>${s.min_warehouses}</b></div>
      <div class="scen-stat">Aggregate Sj: <b>${s.agg_sj.toFixed(2)}</b></div>
      <div class="scen-stat">Avg Sj: <b>${s.avg_sj.toFixed(2)}</b></div>
      <div class="scen-stat">CAPEX (relative): <b>${s.capex}</b></div>
      <div class="scen-nodes">Selected nodes: ${s.nodes.join(" · ")}</div>
      ${s.paradox ? `<div class="paradox-note">${s.paradox}</div>` : ""}
    </div>`).join("");
}

function buildSCLPCompareChart() {
  const ctx = document.getElementById("chart-sclp-compare");
  if (!ctx) return;
  const s = D.sclp_scenarios;
  if (charts.sclp) charts.sclp.destroy();
  charts.sclp = new Chart(ctx, {
    type: "bar", data: {
      labels: s.map(sc => `${sc.radius_km} km`),
      datasets: [
        { label: "Warehouses", data: s.map(sc => sc.min_warehouses), backgroundColor: s.map(sc => sc.color), borderRadius: 6, yAxisID: "y" },
        { label: "Avg FRM score", data: s.map(sc => sc.avg_sj), type: "line", borderColor: "#b56a0e", backgroundColor: "transparent", pointBackgroundColor: "#b56a0e", yAxisID: "y2", tension: 0.3 }
      ]
    }, options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: "top", labels: { font: { size: 11 }, boxWidth: 10 } } },
      scales: {
        y: { title: { display: true, text: "Warehouses", font: { size: 11 } }, min: 0, max: 7, ticks: { stepSize: 1, font: { size: 11 } } },
        y2: { title: { display: true, text: "Avg FRM score", font: { size: 11 } }, position: "right", min: 5.5, max: 8, ticks: { font: { size: 11 } }, grid: { drawOnChartArea: false } }
      }
    }
  });
}

/* ── NETWORK ────────────────────────────────────────────── */
function buildNetworkCards() {
  const el = document.getElementById("network-full-cards");
  if (!el) return;
  el.innerHTML = D.optimal_network.map(n => `
    <div class="card" style="border-top:3px solid ${n.color}">
      <span class="node-badge" style="background:${n.color}22;color:${n.color}">${n.taluka} Taluka</span>
      <div class="node-name" style="margin-top:6px;font-size:18px">${n.name}</div>
      <div class="node-type" style="margin-bottom:10px">${n.type}</div>
      <div class="node-stat-row" style="grid-template-columns:1fr 1fr">
        <div class="node-stat"><div class="node-stat-val">${n.frm.toFixed(4)}</div><div class="node-stat-lbl">FRM Score</div></div>
        <div class="node-stat"><div class="node-stat-val">${n.share}%</div><div class="node-stat-lbl">Network share</div></div>
        <div class="node-stat"><div class="node-stat-val">${n.ics}</div><div class="node-stat-lbl">ICS clusters</div></div>
        <div class="node-stat"><div class="node-stat-val">${n.farmers.toLocaleString()}</div><div class="node-stat-lbl">Enrolled farmers</div></div>
        <div class="node-stat" style="grid-column:span 2"><div class="node-stat-val">${n.mt} MT/yr</div><div class="node-stat-lbl">Procurement target</div></div>
      </div>
      <div class="note" style="margin-top:10px;border-left-color:${n.color}">${n.note}</div>
    </div>`).join("");
}

function buildProcurementChart() {
  const ctx = document.getElementById("chart-procurement");
  if (!ctx) return;
  if (charts.proc) charts.proc.destroy();
  charts.proc = new Chart(ctx, {
    type: "pie", data: {
      labels: D.optimal_network.map(n => `${n.name} (${n.share}%)`),
      datasets: [{ data: D.optimal_network.map(n => n.mt), backgroundColor: D.optimal_network.map(n => n.color), borderWidth: 2, borderColor: "#fff" }]
    }, options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: "bottom", labels: { font: { size: 11 }, boxWidth: 10 } }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} MT/yr` } } }
    }
  });
}

function buildNetworkTable() {
  const tbl = document.getElementById("network-table");
  if (!tbl) return;
  tbl.innerHTML = D.optimal_network.map(n => `<tr>
    <td><b>${n.name}</b></td>
    <td>${n.taluka}</td>
    <td>${n.type}</td>
    <td class="num">${n.ics}</td>
    <td class="num">${n.farmers.toLocaleString()}</td>
    <td class="num">${n.mt}</td>
    <td class="num">${n.share}%</td>
    <td class="num">${n.frm.toFixed(4)}</td>
  </tr>`).join("");
}

/* ── INIT ALL ────────────────────────────────────────────── */
window.addEventListener("DOMContentLoaded", () => {
  buildTalukaList();
  buildScenCards();
  setTimeout(() => {
    buildChartTaluka();
    buildChartAHPMain();
    buildChartCriteriaTop();
  }, 200);
  buildAHPMatrix();
  buildCriteriaTable();
  buildSCLPCards();
  buildOptimalCards();
  buildFRMTable();
  buildNetworkCards();
  buildNetworkTable();
  document.querySelectorAll(".nav-tab").forEach(b => b.addEventListener("click", () => {
    const t = b.dataset.tab;
    setTimeout(() => {
      if (t === "frm") { buildFRMChart(); }
      if (t === "ahp") { buildAHPCatChart(); }
      if (t === "sclp") { buildSCLPCompareChart(); }
      if (t === "network") { buildProcurementChart(); }
    }, 100);
  }));
});
