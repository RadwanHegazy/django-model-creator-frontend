from django.shortcuts import render
from django.http import JsonResponse
from frontend.settings import MAIN_URL
from django.views.decorators.csrf import csrf_exempt
import json
import requests

@csrf_exempt
def index (request) : 

    context = {}

    if request.method == "POST" : 
        def get (name) : return request.POST.get(name,None)
        data = {
            'app' : get('app_name'),
            'model_name' : get('app_model'),
            'has_uuid' : True if get('has_uuid') == 'true' else False
        }

        list_fields = []
        fields = str(get('fields')).split('@')

        for i in fields : 
            if i : 
                j = str(i).split(',')
                list_fields.append(
                    {"name":j[0],"type":j[1]}
                )

        data['fields'] = list_fields
        print(data)
        req_2 = requests.post(MAIN_URL + '/model/create/',json=json.dumps(data))

        return JsonResponse(req_2.json(),safe=False)

    req = requests.get(MAIN_URL + "/model/get/")
    context['fields'] = req.json()

    return render(request,'index.html',context)

def code (request, model_id) :
    req = requests.get(
        MAIN_URL + f'/model/get/{model_id}/'
    ) 

    body = req.json()['body']
    
    context = {
        'body' : body
    }
    return render(request,'code.html',context)


