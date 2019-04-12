const tape = require('tape');
const buildDatabase = require('../../database/db_build');
const getData = require('../queries/getData');
const postData = require('../queries/postData');

tape("tape is working", t => {
    t.equals(1, 1, "1 equals 1");
    t.end();
});

tape("getData" , t => {
   

        let expected = 
            {
                id: 1,
                action_point: 'stop using gendered language when referring to the entire group (see: "guys")',
                date :    'Fri Mar 08 2019 00:00:00 GMT+0000 (GMT)'
            };
        

        getData.actionQuery((err, result) =>{
            if(err) console.log(err);
            console.log("result hERE!",result);
            t.deepEqual(result[0].action_point, expected.action_point, 'Returns first output row of action points table');
            t.end();
        });
    
});