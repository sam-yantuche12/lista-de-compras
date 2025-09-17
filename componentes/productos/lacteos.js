export function lacteos() {
    let section = document.createElement("div");

    let lista = [
        { nombre: "Leche", precio: 6 },
        { nombre: "Queso", precio: 12 },
        { nombre: "Yogurt", precio: 5 },
        { nombre: "Mantequilla", precio: 8 }
    ];

    lista.forEach(p => {
        let div = document.createElement("div");

        let nombre = document.createElement("p");
        nombre.textContent = p.nombre;

        let precio = document.createElement("p");
        precio.textContent = "Q " + p.precio;

        let btn = document.createElement("button");
        btn.textContent = "agregar";

        div.appendChild(nombre);
        div.appendChild(precio);
        div.appendChild(btn);

        section.appendChild(div);
    });

    return section;
}
