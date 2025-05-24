document.addEventListener("DOMContentLoaded", () => {
  // Inject the SVG filters directly into the DOM
  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("xmlns", svgNS);
  svg.setAttribute("version", "1.1");
  svg.setAttribute("style", "position: absolute; width: 0; height: 0;");

  const defs = document.createElementNS(svgNS, "defs");

  for (let i = 0; i <= 10; i++) {
    const filter = document.createElementNS(svgNS, "filter");
    filter.setAttribute("id", `squiggly-${i}`);

    const turbulence = document.createElementNS(svgNS, "feTurbulence");
    turbulence.setAttribute("id", `turbulence${i}`);
    turbulence.setAttribute("baseFrequency", "0.02");
    turbulence.setAttribute("numOctaves", "10");
    turbulence.setAttribute("result", "noise");
    turbulence.setAttribute("seed", i.toString());

    const displacement = document.createElementNS(svgNS, "feDisplacementMap");
    displacement.setAttribute("in", "SourceGraphic");
    displacement.setAttribute("in2", "noise");
    displacement.setAttribute("scale", i % 2 === 0 ? "2" : "3");

    filter.appendChild(turbulence);
    filter.appendChild(displacement);
    defs.appendChild(filter);
  }

  svg.appendChild(defs);
  document.body.appendChild(svg);

  // Select the turbulence elements AFTER they're in the DOM
  const turbulenceElements = [
    document.getElementById("turbulence2"),
    document.getElementById("turbulence3"),
    document.getElementById("turbulence4"),
    document.getElementById("turbulence5"),
    document.getElementById("turbulence6"),
    document.getElementById("turbulence7"),
    document.getElementById("turbulence8"),
    document.getElementById("turbulence9"),
    document.getElementById("turbulence10"),
  ];

  function updateSeeds() {
    turbulenceElements.forEach(turbulence => {
      if (turbulence) {
        const randomFreq = Math.random() * 0.02 + 0.01;
        turbulence.setAttribute("baseFrequency", randomFreq.toFixed(4));
      }
    });
  }

  setInterval(updateSeeds, 1000);
});