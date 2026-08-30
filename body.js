// Función para conectar con el archivo JavaScript
const productos = [
    {
        id: 1,
        nombre: "Audífonos Razer BlackShark V2 X",
        descripcion: "Audífonos gamer con sonido 7.1, drivers de 50 mm y diseño cómodo para largas sesiones de juego.",
        precio: 39990,
        imagen: "https://media.spdigital.cl/thumbnails/products/4vdgea3g_d38e5d9c_thumbnail_4096.png"
    },

    {
        id: 2,
        nombre: "Mouse Logitech G Pro Wireless",
        descripcion: "Mouse gamer inalámbrico de alta precisión, con sensor HERO y tecnología LIGHTSPEED, ideal para juegos competitivos.",
        precio: 29990,
        imagen: "img/mouse_logitech_whiteee.png"
    },

    {
        id: 3,
        nombre: "Teclado Mecánico HyperX Alloy FPS Pro",
        descripcion: "Teclado mecánico gamer resistente y preciso, ideal para juegos competitivos y sesiones largas.",
        precio: 49990,
        imagen: "img/teclado_alloy_pro_fps.png"
    },

    {
        id: 4,
        nombre: "MSI GeForce RTX 5070 Ti FRIEREN Edition",
        descripcion: "RTX 5070 Ti de 16 GB GDDR7 con DLSS 4, potente refrigeración y diseño especial edición Frieren.",
        precio: 1399990,
        imagen: "img/rtx20ti_transparente.png"
    },

    {
        id: 5,
        nombre: "Monitor Gamer OLED MSI MAG 272QP X24",
        descripcion: "Monitor gamer OLED de 27 pulgadas con resolución QHD, tasa de refresco de 240Hz y tiempo de respuesta de 0.03ms.",
        precio: 453990,
        imagen: "https://storage-asset.msi.com/global/picture/product/product_175738613265ae8f1336fa1d0d2a172acec0f779a1.webp"
    },

    {
        id: 6,
        nombre: "AMD Ryzen 5 5600X",
        descripcion: "Procesador Ryzen 5 5600X con 6 núcleos y 12 hilos, ideal para gaming y productividad.",
        precio: 149990,
        imagen: "img/procesador_ryzen_56000x.png"
    }
];



const contenedorProductos = document.getElementById("contenedor-productos");

function agregarAlCarrito(idProducto) {
    console.log("Producto agregado:", idProducto);
    // aquí luego pones la lógica del carrito
}

productos.forEach(function(producto) {
    contenedorProductos.innerHTML += `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto" width="200" height="200">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$${producto.precio.toLocaleString("es-CL")}</p>
            <button>Ver producto</button>
            <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        </div>
    `;

});