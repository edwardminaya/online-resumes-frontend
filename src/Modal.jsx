/* eslint-disable react/prop-types */
import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" id="modalClose" onClick={props.onClose}>
            &#9447;
          </button>
        </section>
      </div>
    );
  }
}
