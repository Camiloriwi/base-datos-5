-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:33065
-- Tiempo de generación: 20-01-2024 a las 19:20:09
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ventas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cedula` int(11) NOT NULL,
  `nombre` text DEFAULT NULL,
  `apellidos` text DEFAULT NULL,
  `direccion` varchar(35) NOT NULL,
  `telefono` int(10) DEFAULT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`cedula`, `nombre`, `apellidos`, `direccion`, `telefono`, `email`) VALUES
(34, 'pedro', 'perez', 'Cr 62  38 poblado', 316, 'pedro.hotmail'),
(123, 'camilo', 'torres', 'cr 23  n 35 envigado', 312, 'torres.gmail'),
(234, 'javier', 'cuenca', 'Cr 56 N34  sabaneta', 310, 'cenca.sabaneta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `numero_factura` int(30) NOT NULL,
  `ID_cliente` int(11) DEFAULT NULL,
  `fecha/hora` datetime(6) DEFAULT NULL,
  `subtotal` decimal(20,0) DEFAULT NULL,
  `IVA` decimal(11,0) DEFAULT NULL,
  `otros` decimal(11,0) NOT NULL,
  `total` decimal(30,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura_productos`
--

CREATE TABLE `factura_productos` (
  `ID_factura` int(99) DEFAULT NULL,
  `ID_producto` int(30) DEFAULT NULL,
  `cantidad` int(50) DEFAULT NULL,
  `subtotal` decimal(30,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID` int(12) NOT NULL,
  `detalle` text NOT NULL,
  `udidad_medida` text NOT NULL,
  `valor` decimal(6,0) DEFAULT NULL,
  `existencia` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cedula`,`email`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`numero_factura`),
  ADD KEY `ID_cliente` (`ID_cliente`);

--
-- Indices de la tabla `factura_productos`
--
ALTER TABLE `factura_productos`
  ADD KEY `ID_producto` (`ID_producto`),
  ADD KEY `ID_factura` (`ID_factura`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`ID_cliente`) REFERENCES `clientes` (`cedula`);

--
-- Filtros para la tabla `factura_productos`
--
ALTER TABLE `factura_productos`
  ADD CONSTRAINT `factura_productos_ibfk_1` FOREIGN KEY (`ID_producto`) REFERENCES `productos` (`ID`),
  ADD CONSTRAINT `factura_productos_ibfk_2` FOREIGN KEY (`ID_factura`) REFERENCES `factura` (`numero_factura`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
