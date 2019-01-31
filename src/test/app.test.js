import {getZodiac,howCanIgo,delivery,calculateOboi} from "../js/app.js";

test("should recongnize zodiac in mount beginning",()=>{
    const result = getZodiac(11,22);
    expect(result).toBe('скропион');
});

test("we can find money",()=>{
    const result = delivery(1,100);
    expect(result).toBeCloseTo(70);
});

test("should killometers how can i go", ()=>{
    const result = howCanIgo(10,100);
    expect(result).toBeCloseTo(10);
});

test("should we can find rulon",()=>{
    const result = calculateOboi(4,6,3,0.5,10);
    expect(result).toBeCloseTo(4);
});