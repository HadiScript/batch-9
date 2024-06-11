const React = {
  useState: (str1) => {
    let itsString = str1;
    return [itsString, (str) => {
      itsString = str
    }];
  },
};

const {useState} = React;

const [name, func1] = useState(str1)
