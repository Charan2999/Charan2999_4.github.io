function updateCounter() {
    const counter = document.getElementById('counter');
    const list = document.getElementById('list');
    
    //increment the counter everytime user visits the page by storing in local storage
    let count = localStorage.getItem('visiterCount');
    let vList = localStorage.getItem('visiterLocation');
    /**
     * if count is null then set count to 1
    * else increment the count by 1 (Note: count is a string so convert it to number using parseInt)
    */
    if (count == null){
            count = 1;
    }
    else{
            count  =parseInt(count)+ 1;
    }
    vList = vList + list
    localStorage.setItem('visiterCount', count);
    localStorage.setItem('visiterLocation', count);
    counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterCount')
    list.innerHTML = `Vistor location: ${localStorage.getItem('visiterLocation')}`;
}
updateCounter();
