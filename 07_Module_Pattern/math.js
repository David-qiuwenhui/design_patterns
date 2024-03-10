// Module Pattern 模块模式
// 随着应用程序和代码库的增长，保持代码的可维护性和独立性变得越来越重要。模块模式允许您将代码分割成更小的、可重用的部分

const privateValue = 'This is a value private to the module!';

export default function add(x, y) {
  return x + y;
}

export function multiply(x) {
  return x * 2;
}

export function subtract(x, y) {
  return x - y;
}

export function square(x) {
  return x * x;
}
