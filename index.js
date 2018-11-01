let facts = [
    ['gabriel', 'endereço', 'av rio branco, 109', true],
    ['joão', 'endereço', 'rua alice, 10', true],
    ['joão', 'endereço', 'rua bob, 88', true],
    ['joão', 'telefone', '234-5678', true],
    ['joão', 'telefone', '91234-5555', true],
    ['joão', 'telefone', '234-5678', false],
    ['gabriel', 'telefone', '98888-1111', true],
    ['gabriel', 'telefone', '56789-1010', true],
];

class Filter {
    constructor (facts) {
        this.facts = facts;
        this.entities;
        this.filters = [ 'isActive', 'cardinality' ];
        this.filterMethods = {
            nameCondition: ( item, nome ) => (item[0] === nome && this.filterMethods.lastAdress(nome)),
            lastAdress: ( nome ) => {
                if(this.entities !== nome) {
                    this.entities = nome;
                    return true
                }
            },
            addressAndName: ( item ) => {
                if (item[1] === 'endereço' && (this.filterMethods.nameCondition(item, 'joão') || this.filterMethods.nameCondition(item, 'gabriel'))) {
                    return true
                }
            },
            phoneCondition: ( item ) => ( item[1] === 'telefone'),
            cardinality: ( item ) => {
                if( this.filterMethods.addressAndName(item) || this.filterMethods.phoneCondition(item)) {
                    return true
                }
            },
            isActive: ( item ) => (Boolean(item[3] === true)),
        };
        this.resultFilter = ( item ) =>
            this.filters.reduce( ( acc, fn ) => {
                return acc && this.filterMethods[ fn ]( item )
            }, true );
    }

    init () {
        return this.facts.filter(this.resultFilter)
    }
}
let filter = new Filter(facts);
console.log(filter.init());
