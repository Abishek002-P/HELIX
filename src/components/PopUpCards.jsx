import { motion } from "framer-motion";

function PopUp(props) {
  return (
    <>
      <motion.div
        onClick={props.customClickEvent}
        whileHover={{ scale: 1.08 }}
        className="card card-btn cardColor textColor text-justify m-5 d-flex align-items-center justify-content-center"
        style={{
          width: "17em",
          boxShadow:
            "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
        }}
      >
        <img
          className="mt-3"
          src={props.src}
          alt=""
          style={{ height: "140px", width: "210px" }}
        />
        <div className="card-body px-0">
          <h6 className="card-title px-2 col-12 p-0 font-weight-bold text-center">
            {props.title ? props.title : "Check this out"}
          </h6>
        </div>
      </motion.div>
    </>
  );
}

export default PopUp;
