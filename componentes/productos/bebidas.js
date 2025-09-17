export function bebidas() {
    let section = document.createElement("div");

    let lista = [
        { nombre: "Coca Cola", precio: 5 },
        { nombre: "Pepsi", precio: 4 },
        { nombre: "Fanta", precio: 3 },
        { nombre: "Agua", precio: 2 }
    ];

    lista.forEach(p => {
        let div = document.createElement("div");

        let nombre = document.createElement("p");
        nombre.textContent = p.nombre;

        let precio = document.createElement("p");
        precio.textContent = "Q " + p.precio;

        let btn = document.createElement("button");
        btn.textContent = "Agregar";

        div.appendChild(nombre);
        div.appendChild(precio);
        div.appendChild(btn);

        section.appendChild(div);
    });

    return section;
}
