declare module "paypack-js"
{
    const PayPack: {
        config: (obj?:any)=>any,
        cashin: (obj:any)=>Promise<any>,
        methods: {setSecrets:(obj?:any)=>any}
    } ;


    namespace PayPack{}
    export = PayPack
}

