class CovidStatus{
    constructor(Cough, ShortBreath, SoreThroat, RunnyNose, HoarseVoice, DifficultySwallowing, SmellTaste, Nausea, Fatigue, Chills, Headache, TravelHistory, Fever, ContactHistory ){
        this.Cough = Cough;
        this.ShortBreath = ShortBreath;
        this.SoreThroat = SoreThroat;
        this.RunnyNose = RunnyNose;
        this.HoarseVoice = HoarseVoice;
        this.DifficultySwallowing = DifficultySwallowing;
        this.SmellTaste = SmellTaste;
        this.Nausea = Nausea;
        this.Fatigue = Fatigue;
        this.Chills = Chills;
        this.Headache = Headache;
        this.TravelHistory = TravelHistory;
        this.Fever = Fever;
        this.ContactHistory = ContactHistory;
    }
}
newCovidStatus = new CovidStatus();

function validateInputs()
{
    var cough_value;
    var short_breathe_value;
    var sore_throat_value;
    var runny_nose_value;
    var hoarse_voice_value;
    var difficulty_swallowing_value;
    var smell_taste_value;
    var nausea_value;
    var fatigue_value;
    var chills_value;
    var headache_value;
    var travel_history_value;
    var fever_value;
    var contact_history_value;

    if (document.getElementById('coughTrue').checked) {
        cough_value = document.getElementById('coughTrue');
    }
    else if(document.getElementById('coughFalse').checked){
        cough_value = document.getElementById('coughFalse');
    }
    if (document.getElementById('shortBreathTrue').checked) {
        short_breathe_value = document.getElementById('shortBreathTrue');
    }
    else if(document.getElementById('shortBreathFalse').checked){
        short_breathe_value = document.getElementById('shortBreathFalse');
    }
    if (document.getElementById('soreThroatTrue').checked) {
        sore_throat_value = document.getElementById('soreThroatTrue');
    }
    else if(document.getElementById('soreThroatFalse').checked){
        sore_throat_value = document.getElementById('soreThroatFalse');
    }
    if (document.getElementById('runnyNoseTrue').checked) {
        runny_nose_value = document.getElementById('runnyNoseTrue');
    }
    else if(document.getElementById('runnyNoseFalse').checked){
        runny_nose_value = document.getElementById('runnyNoseFalse');
    }
    if (document.getElementById('hoarseVoiceTrue').checked) {
        hoarse_voice_value = document.getElementById('hoarseVoiceTrue');
    }
    else if(document.getElementById('hoarseVoiceFalse').checked){
        hoarse_voice_value = document.getElementById('hoarseVoiceFalse');
    }
    if (document.getElementById('difficultySwallowingTrue').checked) {
        difficulty_swallowing_value = document.getElementById('difficultySwallowingTrue');
    }
    else if(document.getElementById('difficultySwallowingFalse').checked){
        difficulty_swallowing_value = document.getElementById('difficultySwallowingFalse');
    }
    if (document.getElementById('smellTasteTrue').checked) {
        smell_taste_value = document.getElementById('smellTasteTrue');
    }
    else if(document.getElementById('smellTasteFalse').checked){
        smell_taste_value = document.getElementById('smellTasteFalse');
    }
    if (document.getElementById('nauseaTrue').checked) {
        nausea_value = document.getElementById('nauseaTrue');
    }
    else if(document.getElementById('nauseaFalse').checked){
        nausea_value = document.getElementById('nauseaFalse');
    }
    if (document.getElementById('fatigueTrue').checked) {
        fatigue_value = document.getElementById('fatigueTrue');
    }
    else if(document.getElementById('fatigueFalse').checked){
        fatigue_value = document.getElementById('fatigueFalse');
    }
    if (document.getElementById('chillsTrue').checked) {
        chills_value = document.getElementById('chillsTrue');
    }
    else if(document.getElementById('chillsFalse').checked){
        chills_value = document.getElementById('chillsFalse');
    }
    if (document.getElementById('headacheTrue').checked) {
        headache_value = document.getElementById('headacheTrue');
    }
    else if(document.getElementById('headacheFalse').checked){
        headache_value = document.getElementById('headacheFalse');
    }
    if (document.getElementById('travelHistoryTrue').checked) {
        travel_history_value = document.getElementById('travelHistoryTrue');
    }
    else if(document.getElementById('travelHistoryFalse').checked){
        travel_history_value = document.getElementById('travelHistoryFalse');
    }
    if (document.getElementById('feverSymptomTrue').checked) {
        fever_value = document.getElementById('feverSymptomTrue');
    }
    else if(document.getElementById('feverSymptomFalse').checked){
        fever_value = document.getElementById('feverSymptomFalse');
    }
    if (document.getElementById('contactHistoryTrue').checked) {
        contact_history_value = document.getElementById('contactHistoryTrue');
    }
    else if(document.getElementById('contactHistoryFalse').checked){
        contact_history_value = document.getElementById('contactHistoryFalse');
    }
    
    


    if(validateNotNull(cough_value, coughSymptomError)){
        newCovidStatus.Cough = cough_value;
    }
    if(validateNotNull(short_breathe_value, shortBreathError)){
        newCovidStatus.ShortBreath = short_breathe_value;
    }
    if(validateNotNull(sore_throat_value, soreThroatError)){
        newCovidStatus.SoreThroat = sore_throat_value;
    }
    if(validateNotNull(runny_nose_value, runnyNoseError)){
        newCovidStatus.RunnyNose = runny_nose_value;
    }
    if(validateNotNull(hoarse_voice_value, hoarseVoiceError)){
        newCovidStatus.HoarseVoice = hoarse_voice_value;
    }
    if(validateNotNull(difficulty_swallowing_value, difficultySwallowingError)){
        newCovidStatus.DifficultySwallowing = difficulty_swallowing_value;
    }
    if(validateNotNull(smell_taste_value, smellTasteError)){
        newCovidStatus.SmellTaste = smell_taste_value;
    }
    if(validateNotNull(nausea_value, nauseaError)){
        newCovidStatus.Nausea = nausea_value;
    }
    if(validateNotNull(fatigue_value, fatigueError)){
        newCovidStatus.Fatigue = fatigue_value;
    }
    if(validateNotNull(chills_value, chillsError)){
        newCovidStatus.Chills = chills_value;
    }
    if(validateNotNull(headache_value, headacheError)){
        newCovidStatus.Headache = headache_value;
    }
    if(validateNotNull(travel_history_value, travelHistoryError)){
        newCovidStatus.TravelHistory = travel_history_value;
    }
    if(validateNotNull(fever_value, feverSymptomError)){
        newCovidStatus.Fever = fever_value;
    }
    if(validateNotNull(contact_history_value, contactHistoryError)){
        newCovidStatus.ContactHistory = contact_history_value;
    }
    if(
        newCovidStatus.Cough != null 
        && newCovidStatus.ShortBreath != null 
        && newCovidStatus.SoreThroat != null 
        && newCovidStatus.DifficultySwallowing != null 
        && newCovidStatus.SmellTaste != null 
        && newCovidStatus.Nausea != null 
        && newCovidStatus.Fatigue != null
        && newCovidStatus.Chills != null 
        && newCovidStatus.Headache != null 
        && newCovidStatus.TravelHistory != null 
        && newCovidStatus.Fever != null 
        && newCovidStatus.ContactHistory != null 
        ){
        window.location.replace("ThankYou.html");
    }
}

function validateNotNull(input, errorDiv){
    try{
        if(input == null){
            throw "Please select an option"
        }
        input.style.background= "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        return true;
    }catch(msg){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        
    }
}
function createEventListener(){
    var submitBtn = document.getElementById("submitBtn");
    if(submitBtn.addEventListener){
        submitBtn.addEventListener("click", validateInputs, false );
    } else if(submitBtn.attachEvent){
        submitBtn.attachEvent("onclick", validateInputs)
    } 
}

function setUpPages(){
    createEventListener();
}

if(window.addEventListener){
    window.addEventListener("load", setUpPages, false)
} else if(window.attachEvent){
    window.attachEvent("onload", setUpPages)
}


