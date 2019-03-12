/**
 * 기본적인 promise 사용법.
 * 생성된 promise 객체는 then catch를 사용 가능.
 */

const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  }
  reject('실패');
});

promise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });

/**
 * Promise.all
 * -> 순서를 보장하지 않음.
 * -> reject가 하나라도 있을 경우 catch 발생
 * -> 성공한 경우 array로 값이 리턴?
 */
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
const promise3 = Promise.reject('실패');

Promise.all([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.error(error));

/**
 * Promise.all과 async await을 함께 쓰는 방법.
 */
const test = async () => {
  try {
    const promise1 = Promise.resolve('성공1');
    const promise2 = Promise.resolve('성공2');
    const promise3 = Promise.resolve('실패');
    const promise4 = null;

    const result = await Promise.all([promise1, promise2, promise3]);
    console.log('result', result);
  } catch (e) {
    console.log('err!!!!', e);
  }
};
