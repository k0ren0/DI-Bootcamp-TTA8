
# #----------------------------------------------------------------
# #Daily Challenge: 1
# #----------------------------------------------------------------

class Pagination():

    def __init__(self, items, pagesize) -> None:
        self.items = items
        self.pagesize = int(pagesize)
        self.current_page = 1

    def getVisibleItems(self):
        """ returns a list of items visible depending on the pageSize"""
        end_indx = self.pagesize * self.current_page
        start_indx = end_indx - self.pagesize

        visible_items = self.items[start_indx:end_indx]
        print(visible_items)
                             
    def nextPage(self):
        if self.current_page == self.total_pages:

        self.current_page += 1
        return self.current_page

    def firstPage(self):
        self.current_page += 1
        return self.current_page
    
    def lastPage(self):
        self.current_page += 1

    def goToPage(self, pageNum):
        self.current_page - pageNum
        return self.current_page

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
print(alphabetList)

p = Pagination(alphabetList, 4)
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()

