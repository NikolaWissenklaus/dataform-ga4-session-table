// Datasets

//propriedade ga4
const ga4_prop = "[prop id]";//ex: 1234567890

//lista datasets
const ga4_dataset = "analytics_" + ga4_prop;

//====================================================================================================

// Tables

//---------------------
function getDateNDaysAgo(n) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // meses são 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}
//---------------------

//dia
//3 se a prop coleta < 25 bi de eventos por mês
//7 se a prop coleta > 25 bi e < 250 bi de eventos por mês
//14 se a prop coleta > 250 bi de eventos por mês
const sla = 3;

//lista tables
const ga4_table = "events_" + getDateNDaysAgo(sla);
const sessions_table = "ga4_sessions_" + getDateNDaysAgo(sla);

//====================================================================================================

module.exports = {
    ga4_dataset,
    ga4_table,
    sessions_table
};













