
//---------------------------------------------------------------
function getDateNDaysAgo(n) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // meses são 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}
//---------------------------------------------------------------

//dia
//3 se a prop coleta < 25 bi de eventos por mês
//7 se a prop coleta > 25 bi e < 250 bi de eventos por mês
//14 se a prop coleta > 250 bi de eventos por mês
const sla = 3;

//====================================================================================================

//GA4 Raw
const ga4_table = "events_" + getDateNDaysAgo(sla);

//-----------------------------------------------

//Staging
const stg_ga4_base = "stg_ga4_base";

//Intermediate
const int_ga4_session_start_status = "int_ga4_session_start_status";
const int_ga4_first_session_event = "int_ga4_first_session_event";
const int_ga4_engaged_sessions = "int_ga4_engaged_sessions";
const int_ga4_session_duration = "int_ga4_session_duration";
const int_ga4_engagement_time = "int_ga4_engagement_time";

//Fatos
const fct_ga4_sessions = "fct_ga4_sessions_" + getDateNDaysAgo(sla);

//Agregados
const agg_ga4_sessions = "agg_daily_sessions";


//====================================================================================================

module.exports = {
    ga4_table,
    
    stg_ga4_base,

    int_ga4_session_start_status,
    int_ga4_first_session_event,
    int_ga4_engaged_sessions,
    int_ga4_session_duration,
    int_ga4_engagement_time,

    fct_ga4_sessions,

    agg_ga4_sessions
};