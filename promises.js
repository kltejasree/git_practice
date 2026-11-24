asyncFunc1()
.then(() => {
    console.log("Completed async1")
    return asyncFunc2()
})

.then(() => {
    console.log("Completed async2");
    return asyncFunc3();
})

.then(() => {
    console.log("completed async3")
    console.log("All succeeded")
})

.catch((err) => {
    console.log("Failure in " + err) 

})

asyncFunc1();