class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        ans = ''
        
        for i in range(len(min(strs, key=len))):
            for word_i in range(1, len(strs)):
                if strs[0][i] != strs[word_i][i]:
                    return ans
            ans += strs[0][i]
        return ans
            
            

        