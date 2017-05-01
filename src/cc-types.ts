export class CCType {
    name: string;
    pattern: RegExp;
    eagerPattern: RegExp;
    groupPattern?: RegExp;
    cvcLength?: number;
    luhn?= true;

    constructor(name: string, config: { pattern, eagerPattern: RegExp, groupPattern?: RegExp, cvcLength?, luhn?}) {
        this.name = name;

        this.pattern = config.pattern;
        this.eagerPattern = config.eagerPattern;
        this.groupPattern = config.groupPattern || null;
        this.cvcLength = config.cvcLength || null;
        this.luhn = config.luhn || null;
    }

    group(num: string) {
        return (num.match(this.groupPattern) || [])
            .slice(1)
            .filter(Boolean);
    }

    test(num: string, eager) {
        return this[eager ? 'eagerPattern' : 'pattern'].test(num);
    }
}

let group19 = /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,3})?/;

export let visa = new CCType('Visa', {
    pattern: /^4\d{12}(\d{3}|\d{6})?$/,
    eagerPattern: /^4/,
    groupPattern: group19
});

export let maestro = new CCType('Maestro', {
    pattern: /^(?:5[06789]\d\d|(?!6011[0234])(?!60117[4789])(?!60118[6789])(?!60119)(?!64[456789])(?!65)6\d{3})\d{8,15}$/,
    eagerPattern: /^(5(018|0[23]|[68])|6[37]|60111|60115|60117([56]|7[56])|60118[0-5]|64[0-3]|66)/,
    groupPattern: group19
});

export let forbrugsforeningen = new CCType('Forbrugsforeningen', {
    pattern: /^600722\d{10}$/,
    eagerPattern: /^600/
});

export let dankort = new CCType('Dankort', {
    pattern: /^5019\d{12}$/,
    eagerPattern: /^5019/
});

export let masterCard = new CCType('MasterCard', {
    pattern: /^(5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)\d{12}$/,
    eagerPattern: /^(2|5[1-5])/
});

export let americanExpress = new CCType('American Express', {
    pattern: /^3[47]\d{13}$/,
    eagerPattern: /^3[47]/,
    groupPattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    cvcLength: 4
});

export let dinersClub = new CCType('Diners Club', {
    pattern: /^3(0[0-5]|[68]\d)\d{11}$/,
    eagerPattern: /^3(0|[68])/,
    groupPattern: /(\d{1,4})?(\d{1,6})?(\d{1,4})?/
});

export let discover = new CCType('Discover', {
    pattern: /^6(011(0[0-9]|[2-4]\d|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]\d{3}|5\d{4})\d{10}$/,
    eagerPattern: /^6(011(0[0-9]|[2-4]|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]|5)/
});

export let jcb = new CCType('JCB', {
    pattern: /^35\d{14}$/,
    eagerPattern: /^35/
});

export let unionPay = new CCType('UnionPay', {
    pattern: /^62[0-5]\d{13,16}$/,
    eagerPattern: /^62/,
    groupPattern: group19,
    luhn: false
});

export let ccTypes: CCType[] = [
    unionPay,
    visa,
    jcb,
    discover,
    dinersClub,
    americanExpress,
    masterCard,
    dankort,
    forbrugsforeningen,
    maestro
];
