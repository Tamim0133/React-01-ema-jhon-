const getDb = () => localStorage.getItem("shopping_cart");
const updateDb = (cart) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};
function addLs(id) {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1; //যদি না থাকে তাহোলে ID এর ভ্যলু হবে ১
  } else {
    //না থাকলে Shopping Cart নামে একটা অবজেক্ট আছে। অইটাকে //JS এ পরিনত করলাম । তারপর যদি এর ভেতর আইডি থাকে //তাহোলে প্রতিবার ক্লিক করার সাথে আইডি এর মান এক এক করে //বারবে।
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
  //এখানে এসে আবার আমরা  Browser ওপোজোগী JSON রুপে //Transform করবো।
}
const removeFromDb = (id) => {
  const exists = getDb();
  if (!exists) {
  } else {
    const shopping_cart = JSON.parse(exists);
    //প্রত্তেকবার কোনো কিছু করার জন্য আমরা জেসোন থেকে নরমাল //JS ফরমাট এ নেই। পরে সেটকে Change করে আবার JSON এ নেই।
    delete shopping_cart[id];
    //Delete বাটোন এ click করলে পুরও জিনিস্টার আইডি Object থেকে //বাতিল হয়ে যাবে।
    updateDb(shopping_cart);
  }
};
//যা যা সেভ করবো তা তা জাতে কন্সোল লগ হয় /
const getSavedDb = () => {
  let savedDb = localStorage.getItem("shopping_cart");
  if (savedDb) {
    savedDb = JSON.parse(savedDb);
  } else {
    savedDb = {};
  }
  return savedDb;
};
export { removeFromDb };
export { addLs };
