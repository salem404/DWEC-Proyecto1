/**
 * Componente paginación
 *
 * @author Paula Rumeu Romero
 * @module Paginacion
 */

// Imports react
import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"

/**
 * Componente de paginación (usando ReactPaginate)
 *
 * @param {Int} pageNumber Número de la página actual
 * @param {Map} info Parte del JSON de la API que describe la cantidad y longitud de las páginas
 * @param {Int} updatePageNumber Nuevo número de página
 *
 * @requires react-paginate
 *
 * @returns {JSX}
 */
const Paginacion = ({ pageNumber, info, updatePageNumber }) => {
  /**
   * @name pageChange
   * @description Cambia de página
   * @param {*} data
   * @constant
   */
  const pageChange = (data) => {
    updatePageNumber(data.selected + 1)
  }

  /**
   * @name setWidth
   * @description Marca la anchura de página
   * @requires react
   * @function
   */
  const [width, setWidth] = useState(window.innerWidth)

  /**
   * @name updateDimensions
   * @description Cambia la anchura de página
   * @function
   */
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  /**
   * @name useEffect
   * @description Se crea un eventListener para la
   * actualización de de altura de la página y se borra
   * @requires react
   * @function
   */
  useEffect(() => {
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return (
    <>
      <ReactPaginate
        className="ppaginacion vista__nav"
        nextLabel="Siguiente"
        previousLabel="Anterior"
        previousClassName="vista__nav_label"
        nextClassName="vista__nav_label"
        activeClassName="vista__nav_elemento_active"
        pageClassName="vista__nav_elemento"
        pageLinkClassName=""
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  )
}

export default Paginacion
