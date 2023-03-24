// DEFINIG THE DAY FUNCTIONAL COMPONENT

const Day = ({ dayData }) => {
  // DEFINIGNG THE UI FOR THE DAY COMPONENT
  return (
    <div className="day">
      <h3>{dayData.day}</h3>

      {/* SHOW TICK ICONK IF THE ISDONE IS TRUE*/}
      {dayData.isDone === true ? (
        <img
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
          className="status-icon"
        />
      ) : (
        ""
      )}
      {/* SHOW CROSS ICON IF THE ISDONE IS FALSE*/}
      {dayData.isDone === false ? (
        <img
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
          className="status-icon"
        />
      ) : (
        ""
      )}

      {/* SHOW NONE ICON IF THE ISDONE IS EMPTY*/}
      {dayData.isDone === "" ? (
        <img
          alt="icon"
          className="status-icon"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
        />
      ) : (
        ""
      )}
    </div>
  );
};

// MAKING THE DEFAULT EXPORTS
export default Day;
