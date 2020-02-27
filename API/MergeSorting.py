def mergeSort(vector):
    print("dividiendo ",vector)
    if len(vector)>1:
        mitad = len(vector)//2
        mitadIzquierda = vector[:mitad]
        mitadDerecha = vector[mitad:]

        mergeSort(mitadIzquierda)
        mergeSort(mitadDerecha)

        i=0
        j=0
        k=0
        while i < len(mitadIzquierda) and j < len(mitadDerecha):
            if mitadIzquierda[i] <= mitadDerecha[j]:
                vector[k]=mitadIzquierda[i]
                i=i+1
            else:
                vector[k]=mitadDerecha[j]
                j=j+1
            k=k+1

        while i < len(mitadIzquierda):
            vector[k]=mitadIzquierda[i]
            i=i+1
            k=k+1

        while j < len(mitadDerecha):
            vector[k]=mitadDerecha[j]
            j=j+1
            k=k+1
    print("cop ",vector)

vector = [54,26,93,17,77,31,44,55,20]
mergeSort(vector)
print(vector)
