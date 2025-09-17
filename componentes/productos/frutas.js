export function frutas() {
    let section = document.createElement("div");

    let lista = [
        { nombre: "Manzana", precio: 3 },
        { nombre: "Banana", precio: 2 },
        { nombre: "Naranja", precio: 4 },
        { nombre: "Fresa", precio: 6 }
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
