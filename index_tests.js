const expect = chai.expect
const assert = chai.assert
 
describe('Function Test', () => {
        it('#Should sort the values in ascending order for values', function () {
            let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            values = values.sort((a, b) => a - b)  
            
            expect(values).to.deep.equal([1,2,3,4,5,6,7,8,9,10,11,12,13])
        });
    
});

