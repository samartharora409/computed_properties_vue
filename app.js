new Vue ({
    el:'#vue-app',
    data:{
        age:20,
        a:0,
        b:0
    },
    /*methods:{
        addToa:function(){
            console.log('a added');
            
            console.log(this.age);
            
            return this.age+this.a;
            
        },
        addTob:function(){
            console.log('b added');
            
            console.log(this.age);
            return this.age+this.b;
            
        }


        

    },*/
    computed:{
        addA:function(){
            console.log('a');
            return this.age+this.a;
        },
        addB:function(){
            console.log('b');
            return this.age+this.b;
        }
    }

});