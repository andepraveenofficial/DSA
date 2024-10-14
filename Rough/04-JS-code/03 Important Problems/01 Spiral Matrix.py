# Spiral Matrix 

# Functions 
def rotate_matrix(matrix):
    rows = len(matrix)
    columns = len(matrix[0])
    rotated_matrix = []
    for column_index in range(columns):
        add_row = []
        for row_index in range(rows):
            add_item = matrix[row_index][column_index]
            add_row.append(add_item)
        rotated_matrix.append(add_row)
    rotated_matrix = rotated_matrix[::-1]    
    return rotated_matrix

rows, columns = list(map(int, input().split()))

matrix = []
for row_count in range(rows):
    add_row = list(map(int, input().split()))
    matrix.append(add_row)
print(matrix)    


rotated_matrix = rotate_matrix(matrix)
print(rotated_matrix)

rotated_matrix = rotate_matrix(rotated_matrix)
print(rotated_matrix)

print("------------")

total_elements = []
for row in matrix:
    total_elements.extend(row)
elements_count = len(total_elements)
print(total_elements)

print("---------")

spiral_matrix = []
while True:
    print(matrix)
    if elements_count == 0:
        break 
    else:
        add_row = matrix[0]
        spiral_matrix.extend(add_row)
        del matrix[0]
        total_elements = []
        for row in matrix:
            total_elements.extend(row)
        elements_count = len(total_elements)
        if elements_count == 0:
            break
        matrix = rotate_matrix(matrix)

print("---------------------")

print(spiral_matrix)

print("================")


'''
Input:
3 3
1 2 3
4 5 6
7 8 9

output:
[1, 2, 3, 6, 9, 8, 7, 4, 5]
'''