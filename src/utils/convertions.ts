const isHexColor = (hex: string) => {
  const regex = new RegExp('^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$', 'i');
  let completeHexCode: string | string[] = hex;

  if (hex.length >= 3 && hex.length <= 5)
    completeHexCode = [...hex].map(value => value === '#' ? value : value + value).join('');
    
  return { status: regex.test(completeHexCode), exec: regex.exec(completeHexCode) };
}

export function hex2rgb(hexCode: string) {
  const { status, exec } = isHexColor(hexCode)

  if (!status) 
    throw new Error('Invalid hexadecimal code');


  const rgbValue = {
    red: exec?.at(1) ? parseInt(exec[1], 16).toString() : '',
    green: exec?.at(2) ? parseInt(exec[2], 16).toString() : '',
    blue: exec?.at(3) ? parseInt(exec[3], 16).toString() : ''
  }

  return `${rgbValue.red} ${rgbValue.green} ${rgbValue.blue}`;
}