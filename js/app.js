document.addEventListener("deviceready", init, false);
function init() {	
    console.log('Ready');
    DataService.prototype.initialize();
    DataService.prototype.readFile(DataService.prototype.fs, 'file.txt', false).then(
        function(data){
            console.log(data);
            console.log('Success');
        },
        function(err){
            console.log(err);
            console.log('Error');
        }
    );
    console.log('done');
}
