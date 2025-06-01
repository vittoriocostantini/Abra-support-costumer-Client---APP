const STORAGE_KEY = 'lastTicketId';
const NUMBER_KEY = 'lastTicketNumber';

function getStoredId() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? parseInt(stored, 10) : 0;
}

function setStoredId(id: number) {
  localStorage.setItem(STORAGE_KEY, id.toString());
}

function getStoredNumber() {
  const stored = localStorage.getItem(NUMBER_KEY);
  return stored ? parseInt(stored, 10) : 0;
}

function setStoredNumber(num: number) {
  localStorage.setItem(NUMBER_KEY, num.toString());
}

export function getNextTicketId() {
  let currentId = getStoredId() + 1;
  setStoredId(currentId);
  return currentId.toString();
}

export function resetTicketId() {
  setStoredId(0);
}

export function getNextTicketNumber() {
  let currentNumber = getStoredNumber() + 1;
  setStoredNumber(currentNumber);
  return `#${currentNumber}`;
}

export function resetTicketNumber() {
  setStoredNumber(0);
} 