const formatVolumeIconPath = require('../assets/scripts/main');


describe('does formatVolumeIconPath return correct path????', ()=>{

    test('volumeValue > 66', ()=>{
        expect(formatVolumeIconPath(67)).toContain('3');
    });
    
    
    test('volumeValue > 33', ()=>{
        expect(formatVolumeIconPath(34)).toContain('2');
    });
    
    
    test('volumeValue > 0', ()=>{
        expect(formatVolumeIconPath(1)).toContain('1');
    });
    
    
    test('volumeValue == 0', ()=>{
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});
