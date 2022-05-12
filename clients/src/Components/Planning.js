import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import { useDispatch, useSelector } from "react-redux";
import { addPlanning, getPlannings } from "../actions/planningAdmin.action";
import { timestampParser } from "./log/Utils";

const Planning = () => {
  const adminData = useSelector((state) => state.adminReducer);
  const planningData = useSelector((state) => state.planningReducer);
  const dispatch = useDispatch();
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: "Reunion",
      allDay: true,
      start: new Date(2022, 2, 5),
      end: new Date(2022, 2, 5),
    },
    {
      title: "Congé",
      allDay: true,
      start: new Date(2022, 2, 6),
      end: new Date(2022, 2, 6),
    },
    {
      title: "Conférence",
      start: new Date(2022, 2, 9),
      end: new Date(2022, 2, 11),
    },
  ];

  //const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" }); //on change setNewEvent ...newEvent
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [newEvent, setNewEvent] = useState({ title, start, end });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.start && newEvent.end) {
      const data = {
        planningId: adminData._id,
        title: newEvent.title,
        start: newEvent.start,
        end: newEvent.end,
      };
      await dispatch(addPlanning(data));
      setAllEvents([...allEvents, newEvent]);
      setNewEvent("");
      dispatch(getPlannings());
    }
  };
  console.log(planningData);
  console.log(timestampParser(planningData));
  const formaté = moment(planningData.start).toDate(timestampParser());
  console.log(formaté);

  const messages = {
    allDay: "journée",
    previous: "Précédent",
    next: "Suivant",
    today: "Aujourd'hui",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    agenda: "Agenda",
    date: "date",
    time: "heure",
    event: "événement", // Or anything you want
    showMore: (total) => `+  ${total}  événement(s) supplémentaire(s)`,
  };

  return (
    <div className="conteneur-calendrier">
      <div className="form-calendar">
        <input
          id="text"
          type="text"
          placeholder="Ajouter titre"
          style={{ marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          id="dateDebut"
          locale={fr}
          dateFormat="dd/MM/yyyy, h:mm aa"
          showTimeSelect
          placeholderText="Date Debut"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          id="dateFin"
          locale={fr}
          dateFormat="dd/MM/yyyy, h:mm aa "
          showTimeSelect
          placeholderText="Date Fin"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button
          id="boutonPlanning"
          className="buttonPlanning"
          onClick={handleAddEvent}
        >
          Ajouter Evènement
        </button>
      </div>
      <Calendar
        className="calendrier"
        min={new Date(0, 0, 0, 8, 0, 0)}
        max={new Date(0, 0, 0, 23, 30, 0)}
        step={30}
        messages={messages}
        localizer={localizer}
        events={planningData}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 500,
          margin: "20px",
          backgroundColor: "white",
          color: "#b4a895",
          border: "3px groove #FFDF00",
        }}
        culture="fr"
        eventPropGetter={(event) => {
          const backgroundColor = event.allday ? "yellow" : "#0060FF";
          return { style: { backgroundColor } };
        }}
      />
    </div>
  );
};

export default Planning;
