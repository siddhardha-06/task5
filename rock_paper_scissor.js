var counter={
    won:0,
    lost:0,
    tie:0
}
function robo_turn(){
    return Math.floor(Math.random()*3)+1
}
function display_res(result){
    document.getElementById('result').innerText=result
}
function you_won(){
    counter.won++;
    document.getElementById('win').innerText=counter.won;
    display_res('You Win')
}
function you_lost(){
    counter.lost++;
    document.getElementById('lost').innerText=counter.lost;
    display_res('You Lose')
}
function tie(){
    counter.tie++;
    document.getElementById('tie').innerText=counter.tie;
    display_res('Tie')
}
function restart(){
    counter.won=0;
    counter.lost=0;
    counter.tie=0;
    document.getElementById('win').innerText=0;
    document.getElementById('lost').innerText=0;document.getElementById('tie').innerText=0;
    document.getElementById('your').innerText='—';
    document.getElementById('robo').innerText='—';
    display_res('—')
}
function get_val(x){
    if(x==1)return '✊ Rock';
    if(x==2)return '✋ Paper';
    return '✌️ Scissors'
}
function get_emoji(x){
    if(x==1)return '✊';
    if(x==2)return '✋';
    return '✌️'
}
function play(mine){
    var robo=robo_turn();
    document.getElementById('your').innerText=get_emoji(mine);
    document.getElementById('robo').innerText=get_emoji(robo);
    if(mine-robo==0)tie();
    else if(mine-robo==1 || (mine==1 && robo==3))you_won();
    else you_lost()
}
