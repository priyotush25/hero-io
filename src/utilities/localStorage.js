// ------------------ WISHLIST ------------------

// get wishlist
export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// add to wishlist
export const updateList = (product) => {
  const wishlist = loadWishlist();
  try {
    const isDuplicate = wishlist.some((p) => p.id === product.id);
    if (isDuplicate) return alert("Already added in wishlist");
    const updatedWishlist = [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  } catch (err) {
    console.log(err);
  }
};

// remove from wishlist
export const removeFromWishlist = (id) => {
  const wishlist = loadWishlist();
  try {
    const updatedWishlist = wishlist.filter((p) => p.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  } catch (err) {
    console.log(err);
  }
};

// ------------------ INSTALLED APPS ------------------

// get installed apps
export const getInstalledApps = () => {
  try {
    const data = localStorage.getItem("installedApps");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// save an app as installed
export const saveInstalledApp = (app) => {
  const installed = getInstalledApps();
  try {
    if (!installed.some((item) => item.id === app.id)) {
      installed.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installed));
    }
  } catch (err) {
    console.log(err);
  }
};
