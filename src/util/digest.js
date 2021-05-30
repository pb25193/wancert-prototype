import keccak256 from 'keccak256';

const getDigestFromRollNumber = (student) => {
    return keccak256(student.rollNumber).toString('hex');
};

/**
 * Write some more digest generators here
 * try to make one nest function that takes in an arg to decide 
 * which digest to create
 */

export { getDigestFromRollNumber };